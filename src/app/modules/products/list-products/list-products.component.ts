import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  products: any = [];
  search: string = '';
  totalPages: number = 0;
  currentPage: number = 1;
  isLoading$: any;

  marcas:any = [];
  marca_id: string = '';

  constructor(
    public productService: ProductService,
    public modalService: NgbModal,
    public toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.listProducts();
    this.isLoading$ = this.productService.isLoading$;
  }

  listProducts(page = 1) {
    this.productService.listProducts(page, this.search).subscribe((resp: any) => {
      console.log(resp);
      this.products = resp.products.data;
      this.totalPages = resp.total;
      this.currentPage = page;
    },(err: any) => {
      console.log(err);
      this.toastr.error("API RESPONSE",err.error.message);
    })
  }

  loadPage($event: any) {
    console.log($event);
    this.listProducts($event);
  }

  deleteProduct(product: any) {
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
        this.productService.deleteProduct(product.id).subscribe((res: any) => {
          let index = this.products.findIndex((item: any) => item.id == product.id);
          this.products.splice(index, 1);
          this.toastr.success('Categoria eliminado satisfactoriamente', 'Eliminado');
        });
      }
    });
  }

  searchTo() {
    this.listProducts();
  }
}
