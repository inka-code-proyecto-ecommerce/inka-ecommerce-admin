import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../service/product.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  title: string = '';
  sku: string = '';
  resumen: string = '';
  price_pen: number = 0;
  price_usd: number = 0;
  description: any = '<p>Hello, World!</p>';
  image_prev: any = '';
  file_imagen: any = null;
  marca_id: string = '';
  marcas: any = [];

  isLoading$: any;

  category_first_id: string = '';
  category_second_id: string = '';
  category_third_id: string = '';
  categories_first: any = [];
  categories_seconds: any = [];
  categories_seconds_backups: any = [];
  categories_thirds: any = [];
  categories_thirds_backups: any = [];

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};

  isShowMultiselect: boolean = false;

  constructor(
    public productService: ProductService,
    public toastr: ToastrService,
  ) {

  }

  ngOnInit(): void {
    this.isLoading$ = this.productService.isLoading$;

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
      { item_id: 6, item_text: 'Laravest' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 6, item_text: 'Laravest' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  addItems() {
    this.isShowMultiselect = true;
    this.dropdownList.push({ item_id: 7, item_text: 'EchoDev' });
    this.selectedItems.push({ item_id: 7, item_text: 'EchoDev' });
    setTimeout(() => {
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
    reader.onloadend = () => (this.image_prev = reader.result);
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
    this.categories_seconds_backups = this.categories_seconds.filter((item: any) => item.category_second_id == this.category_first_id);
  }

  changeCategory() {
    this.categories_thirds_backups = this.categories_thirds.filter((item: any) => item.category_second_id == this.category_second_id);
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  save() {
    if (!this.title || !this.file_imagen) {
      this.toastr.error('Ingrese todos los datos correctamente', 'Validación');
      return;
    }

    let formData = new FormData();
    formData.append('title', this.title);
    formData.append('portada', this.file_imagen);

    this.productService.createProducts(formData).subscribe((res: any) => {
      console.log(res);

      this.title = '';
      this.file_imagen = null;
      this.image_prev = '';
      this.toastr.success("Exito", "El producto se registró correctamente");
    });
  }
}
