import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../service/product.service';

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
  file_image: any = null;

  isLoading$: any;

  category_first_id: string = '';
  category_second_id: string = '';
  category_third_id: string = '';
  categories_first: any = [];
  categories_seconds: any = [];
  categories_seconds_backups: any = [];
  categories_thirds: any = [];
  categories_thirds_backups: any = [];

  constructor(
    public productService: ProductService,
    public toastr: ToastrService,
  ) {

  }

  ngOnInit(): void {
    this.isLoading$ = this.productService.isLoading$;
  }

  processImage($event: any) {
    const file = $event.target.files[0];
    if (!file.type.startsWith('image/')) {
      this.toastr.error('Solamente se aceptan imágenes', 'Error de validación');
      return;
    }
    this.file_image = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.file_image);
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
    this.categories_seconds_backups = this.categories_seconds.filter((item: any) => item.category_second_id == this.category_third_id);
  }

  changeCategory() {
    
  }

  save() {
    if (!this.title || !this.file_image) {
      this.toastr.error('Ingrese todos los datos correctamente', 'Validación');
      return;
    }

    let formData = new FormData();
    formData.append('title', this.title);
    formData.append('image', this.file_image);

    this.productService.createProducts(formData).subscribe((res: any) => {
      console.log(res);

      this.title = '';
      this.file_image = null;
      this.image_prev = '';
      this.toastr.success("Exito", "El producto se registró correctamente");
    });
  }
}
