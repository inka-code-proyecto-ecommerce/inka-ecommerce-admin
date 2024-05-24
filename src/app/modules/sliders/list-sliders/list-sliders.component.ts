import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { SlidersService } from '../service/sliders.service';

@Component({
  selector: 'app-list-sliders',
  templateUrl: './list-sliders.component.html',
  styleUrls: ['./list-sliders.component.scss']
})
export class ListSlidersComponent {
  sliders: any = [];
  search: string = '';
  totalPages: number = 0;
  currentPage: number = 1;
  isLoading: any = null;

  constructor(
    public sliderService: SlidersService,
    public modalService: NgbModal,
    public toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.listSliders();
    this.isLoading = this.sliderService.isLoading$;
  }

  listSliders(page = 1) {
    this.sliderService.listSliders(page, this.search).subscribe((resp: any) => {
      console.log(resp);
      this.sliders = resp.sliders;
      this.totalPages = resp.total;
      this.currentPage = page;
    })
  }

  loadPage($event: any) {
    console.log($event);
    this.listSliders($event);
  }

  deleteSlider(category: any) {
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
        this.sliderService.deleteSlider(category.id).subscribe((res: any) => {
          let index = this.sliders.findIndex((item: any) => item.id == category.id);
          this.sliders.splice(index, 1);
          this.toastr.success('Categoria eliminado satisfactoriamente', 'Eliminado');
        });
      }
    });
  }

  searchTo() {
    this.listSliders();
  }
}
