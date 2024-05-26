import { Component } from '@angular/core';
import { CategoryService } from '../services/categorie.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.scss']
})
export class EditCategorieComponent {
  typeCategory = 1;
  name: string = '';
  state: string = '';
  icon: string = '';
  position: number = 1;
  second_id: string = '';
  third_id: string = '';
  image_prev: any = '';
  file_image: any = null;
  isLoading: any = null;
  categories_first: any = null;
  categories_second: any = null;
  category_id: string = '';
  category: any = null;
  constructor(
    public categoryService: CategoryService,
    public toastr: ToastrService,
    public activateRouter: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.isLoading = this.categoryService.isLoading$;
    this.config();
    this.activateRouter.params.subscribe((res: any) => {
      this.category_id = res.id;
      console.log(res);
    })
    this.categoryService.showCategory(this.category_id).subscribe((res: any) => {
      this.category = res.category;
      this.typeCategory = res.category.type;
      this.name = res.category.name;
      this.icon = res.category.icon;
      this.position = res.category.position;
      this.second_id = res.category.second_id;
      this.third_id = res.category.third_id;
      this.image_prev = res.category.imagen;
      this.state = res.category.state;
    });
  }

  config() {
    this.categoryService.configCategories().subscribe((res: any) => {
      console.log(res);
      this.categories_first = res.categories_first;
      this.categories_second = res.categories_second;
    })
  }

  processImage($event: any) {
    const file = $event.target.files[0];
    if (!file.type.startsWith("image/")) {
      this.toastr.error('Solamente se aceptan imágenes', 'Error de validación');
      return;
    }
    this.file_image = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.file_image);
    reader.onloadend = () => this.image_prev = reader.result;
    this.categoryService.isLoadingSubject.next(true)
    setTimeout(() => {
      this.categoryService.isLoadingSubject.next(false)
    }, 50);
  }

  changeTypeCategory(val: number) {
    this.typeCategory = val;
  }

  save() {
    if (!this.name || !this.position) {
      this.toastr.error("Ingrese todos los datos correctamente", "Validación");
      return;
    }

    if (this.typeCategory == 1 && !this.icon) {
      this.toastr.error("El icono es obligatorio", "Validación");
      return;
    }

    /*     if (this.typeCategory == 1 && !this.file_image) {
          this.toastr.error("La imagen es obligatorio", "Validación");
          return;
        } */

    if (this.typeCategory == 2 && !this.second_id) {
      this.toastr.error("El departamento es obligatorio", "Validación");
      return;
    }

    if (this.typeCategory == 3 && (!this.second_id || !this.third_id)) {
      this.toastr.error("El departamento y el departamento es obligatorio", "Validación");
      return;
    }

    let formData = new FormData();
    formData.append("name", this.name);
    if (this.icon) {
      formData.append("icon", this.icon);
    } else {
      if (this.category.icon) {
        formData.append("icon", '');
      }
    }
    formData.append("position", this.position + "");
    formData.append("type", this.typeCategory + "");
    if (this.file_image) {
      formData.append("image", this.file_image);
    }
    if (this.second_id) {
      formData.append("second_id", this.second_id)
    }
    if (this.third_id) {
      formData.append("third_id", this.third_id)
    }

    formData.append("state", this.state);

    this.categoryService.updateCategory(this.category_id, formData).subscribe((res: any) => {

      if (res.message == 403) {
        this.toastr.error("Hubo un error al registrar una categoría", "Error");
        return;
      }
      this.config();
      this.toastr.success("Se actualizó correctamente", "Exito");
    });
  }
}
