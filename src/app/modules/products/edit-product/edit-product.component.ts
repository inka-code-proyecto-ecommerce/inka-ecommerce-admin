import { Component } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {

  title: string = '';
  sku: string = '';
  resumen: string = '';
  price_pen: number = 0;
  price_usd: number = 0;
  description: any = '<p>Hello, World!</p>';
  image_previsualiza: any = '';
  file_imagen: any = null;
  marca_id: string = '';
  marcas: any = [];

  isLoading$: any;

  categorie_first_id: string = '';
  categorie_second_id: string = '';
  categorie_third_id: string = '';
  categories_first: any = [];
  categories_seconds: any = [];
  categories_seconds_backups: any = [];
  categories_thirds: any = [];
  categories_thirds_backups: any = [];

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};
  word: string = '';

  isShowMultiselect: boolean = false;
  PRODUCT_ID: string = '';
  PRODUCT_SELECTED: any;
  constructor(
    public productService: ProductService,
    private toastr: ToastrService,
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.productService.isLoading$;

    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' },
    //   { item_id: 6, item_text: 'Laravest' }
    // ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 6, item_text: 'Laravest' }
    // ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.activedRoute.params.subscribe((resp: any) => {
      console.log(resp);
      this.PRODUCT_ID = resp.id;
    });

    this.configAll();
  }

  configAll() {
    this.productService.configAll().subscribe((resp: any) => {
      console.log(resp);
      this.marcas = resp.brands;
      this.categories_first = resp.categories_first;
      this.categories_seconds = resp.categories_seconds;
      this.categories_thirds = resp.categories_thirds;
      this.showProduct();
    });
  }

  showProduct() {
    this.productService.showProduct(this.PRODUCT_ID).subscribe((resp: any) => {
      console.log(resp);

      this.PRODUCT_SELECTED = resp.product;
      this.title = resp.product.title;
      this.sku = resp.product.sku;
      this.resumen = resp.product.resumen;
      this.price_pen = resp.product.price_pen;
      this.price_usd = resp.product.price_usd;
      this.description = resp.product.description;
      this.image_previsualiza = resp.product.imagen;
      this.marca_id = resp.product.brand_id;
      this.categorie_first_id = resp.product.categorie_first_id;
      this.categorie_second_id = resp.product.categorie_second_id;
      this.categorie_third_id = resp.product.categorie_third_id;
      this.selectedItems = resp.product.selectedItems;
      this.changeDepartamento();
      this.changeCategorie();
      this.dropdownList = resp.product.tags;
      this.selectedItems = resp.product.tags;
    })
  }

  addItems() {
    this.isShowMultiselect = true;
    let time_date = new Date().getTime();
    this.dropdownList.push({ item_id: time_date, item_text: this.word });
    this.selectedItems.push({ item_id: time_date, item_text: this.word });
    setTimeout(() => {
      this.word = '';
      this.isShowMultiselect = false;
      this.isLoadingView();
    }, 100);
  }

  processImage($event: any) {
    const file = $event.target.files[0];
    if (!file.type.startsWith('image/')) {
      this.toastr.error('Solamente se aceptan imágenes', 'Error de validación');
      return;
    }
    this.file_imagen = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.file_imagen);
    reader.onloadend = () => (this.image_previsualiza = reader.result);
    this.productService.isLoadingSubject.next(true);
    setTimeout(() => {
      this.productService.isLoadingSubject.next(false);
    }, 50);
  }

  isLoadingView() {
    this.productService.isLoadingSubject.next(true);
    setTimeout(() => {
      this.productService.isLoadingSubject.next(false);
    }, 50);
  }

  changeDepartamento() {
    this.categories_seconds_backups = this.categories_seconds.filter(
      (item: any) => item.categorie_second_id == this.categorie_first_id
    );
  }

  changeCategorie() {
    this.categories_thirds_backups = this.categories_thirds.filter(
      (item: any) => item.categorie_second_id == this.categorie_second_id
    );
  }
  public onChange(event: any) {
    this.description = event.editor.getData();
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  save() {
    if (
      !this.title ||
      !this.sku ||
      !this.price_usd ||
      !this.price_pen ||
      !this.marca_id ||
      !this.categorie_first_id ||
      !this.description ||
      !this.resumen ||
      this.selectedItems == 0
    ) {
      this.toastr.error("Validación", "Los campos con el * son obligatorios");
      return;
    }

    let formData = new FormData();
    formData.append("title", this.title);
    formData.append("sku", this.sku);
    formData.append("price_usd", this.price_usd + "");
    formData.append("price_pen", this.price_pen + "");
    formData.append("brand_id", this.marca_id);
    if (this.file_imagen) {
      formData.append("portada", this.file_imagen);
    }
    formData.append("categorie_first_id", this.categorie_first_id);
    if (this.categorie_second_id) {
      formData.append("categorie_second_id", this.categorie_second_id);
    }
    if (this.categorie_third_id) {
      formData.append("categorie_third_id", this.categorie_third_id);
    }
    formData.append("description", this.description);
    formData.append("resumen", this.resumen);
    formData.append("multiselect", JSON.stringify(this.selectedItems));

    this.productService.updateProducts(this.PRODUCT_ID, formData).subscribe((resp: any) => {
      console.log(resp);

      if (resp.message == 403) {
        this.toastr.error("Error de validación", resp.message_text);
      } else {
        // this.title = '';
        this.file_imagen = null;
        // this.sku = '';
        // this.price_pen = 0;
        // this.price_usd = 0;
        // this.marca_id = '';
        // this.categorie_first_id = '';
        // this.categorie_second_id = '';
        // this.categorie_third_id = '';
        // this.description = '';
        // this.resumen = '';
        // this.selectedItems = [];
        //this.image_previsualiza = "";
        this.toastr.success("Exito", "El producto se editó correctamente");
      }
    });
  }

}
