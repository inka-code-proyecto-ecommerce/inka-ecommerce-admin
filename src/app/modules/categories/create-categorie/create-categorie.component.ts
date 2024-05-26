import { Component } from '@angular/core';
import { CategoriesService } from '../services/categorie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.scss'],
})
export class CreateCategorieComponent {
  typeCategorie = 1;
  name: string = '';
  icon: string = '';
  position: number = 1;
  second_id: string = '';
  third_id: string = '';
  image_previsualiza: any = '';
  file_image: any = null;
  isLoading: any = null;
  categories_first: any = null;
  categories_second: any = null;

  constructor(
    public categorieService: CategoriesService,
    public toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.isLoading = this.categorieService.isLoading$;
    this.config();
  }

  config() {
    this.categorieService.configCategories().subscribe((res: any) => {
      console.log(res);
      this.categories_first = res.categories_first;
      this.categories_second = res.categories_second;
    });
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
    reader.onloadend = () => (this.image_previsualiza = reader.result);
    this.categorieService.isLoadingSubject.next(true);
    setTimeout(() => {
      this.categorieService.isLoadingSubject.next(false);
    }, 50);
  }

  changeTypeCategory(val: number) {
    this.typeCategorie = val;
  }

  changeDepartamento() {
    this.categories_second = this.categories_second.filter((item:any) => item.category_second_id === this.typeCategorie, true);
  }

  save() {
    if (!this.name || !this.position) {
      this.toastr.error('Ingrese todos los datos correctamente', 'Validación');
      return;
    }

    if (this.typeCategorie == 1 && !this.icon) {
      this.toastr.error('El icono es obligatorio', 'Validación');
      return;
    }

    if (this.typeCategorie == 1 && !this.file_image) {
      this.toastr.error('La imagen es obligatorio', 'Validación');
      return;
    }

    if (this.typeCategorie == 2 && !this.second_id) {
      this.toastr.error('El departamento es obligatorio', 'Validación');
      return;
    }

    if (this.typeCategorie == 3 && (!this.second_id || !this.third_id)) {
      this.toastr.error(
        'El departamento y el departamento es obligatorio',
        'Validación'
      );
      return;
    }

    let formData = new FormData();
    formData.append('name', this.name);
    if (this.icon) {
      formData.append('icon', this.icon);
    }
    formData.append('position', this.position + '');
    formData.append('type', this.typeCategorie + '');
    if (this.file_image) {
      formData.append('image', this.file_image);
    }
    if (this.second_id) {
      formData.append('second_id', this.second_id);
    }
    if (this.third_id) {
      formData.append('third_id', this.third_id);
    }

    this.categorieService.createCategory(formData).subscribe((res: any) => {
      if (res.message == 403) {
        this.toastr.error('Hubo un error al registrar una categoría', 'Error');
        return;
      }
      console.log(res);
      this.name = '';
      this.icon = '';
      this.position = 1;
      this.typeCategorie = 1;
      this.file_image = null;
      this.image_previsualiza = '';
      this.second_id = '';
      this.third_id = '';
      this.config();
      this.toastr.success('La categoria se registró correctamente', 'Exito');
    });
  }
}
