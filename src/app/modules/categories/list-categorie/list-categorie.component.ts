import { Component } from '@angular/core';
import { CategoriesService } from '../services/categorie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss']
})
export class ListCategorieComponent {
  categories: any = [];
  search: string = '';
  totalPages: number = 0;
  currentPage: number = 1;
  isLoading: any = null;

  constructor(
    public categorieService: CategoriesService,
    public modalService: NgbModal,
    public toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.listCategories();
    this.isLoading = this.categorieService.isLoading$;
  }

  listCategories(page = 1) {
    this.categorieService.listCategories(page, this.search).subscribe((res: any) => {
      console.log(res);
      this.categories = res.categories.data;
      this.totalPages = res.total;
      this.currentPage = page;
    })
  }

  loadPage($event: any) {
    console.log($event);
    this.listCategories($event);
  }

  getDomParser(category: any) {
    var myDiv: any = document.getElementById('svg-category-'+category.id);
    myDiv.innerHTML = category.icon;
    return '';
  }

  deleteCategory(category: any) {
    Swal.fire({ // Utiliza SweetAlert para confirmar la eliminación
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: 'btn btn-danger'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.categorieService.deleteCategory(category.id).subscribe((res: any) => {
          let index = this.categories.findIndex((item: any) => item.id == category.id);
          this.categories.splice(index, 1);
          this.toastr.success('Categoria eliminado satisfactoriamente', 'Eliminado');
        });
      }
    });
  }

  searchTo() {
    this.listCategories();
  }
}
