import { Component } from '@angular/core';
import { DeleteAttributeComponent } from '../delete-attribute/delete-attribute.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AttributesService } from '../../attributes/service/attributes.service';
import { CreateAttributeComponent } from '../create-attribute/create-attribute.component';

@Component({
  selector: 'app-list-attribute',
  templateUrl: './list-attribute.component.html',
  styleUrls: ['./list-attribute.component.scss']
})
export class ListAttributeComponent {
  [x: string]: any;
  attributes: any = [];
  search: string = '';
  totalPages: number = 0;
  currentPage: number = 1;

  constructor(
    public attributesService: AttributesService,
    public modalService: NgbModal,
  ) {
    
  }

  ngOnInit(): void {
    this.listAttribute(); 
    this.isLoading = this.attributesService.isLoading$;
  }

  listAttributes(page = 1) {
    this.attributesService.listAttributes(page, this.search).subscribe((resp: any) => {
      console.log(resp);
      this.attributes = resp.attributes;
      this.totalPages = resp.total;
      this.currentPage = page;      
    })
  }
  getNameAttribute(type_attribute:any) {
    var name_attribute = "";
    type_attribute = parseInt(type_attribute);
    switch (type_attribute) {
      case 1:
        name_attribute = "Texto"
        break;
      case 2:
        name_attribute = "Numero"
        break;
      case 3:
        name_attribute = "Seleccionable"
        break;
      case 4:
        name_attribute = "Seleccionable Multiple"
        break;
      default:
        break;
    }

    return name_attribute;
  }

  loadPage($event: any) {
    console.log($event);
    this.listAttributes($event);
  }

  openModalCreateAttribute() {
    const modalRef = this.modalServie.open(CreateAttributeComponent,{centered:true,size: 'md'});

    modalRef.componentInstance.AttributeC.subscribe((attrib:any) => {
      this.attributes.unshift(attrib);
    })
  }

  openModalEditAttribute(attribute:any){

  }
  
  deleteAttribute(attribute: any) {
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
        this.attributesService.deleteAttributes(attribute.id).subscribe((res: any) => {
          let index = this.attributes.findIndex((item: any) => item.id == attribute.id);
          this.attributes.splice(index, 1);
          this.toastr.success('Atributo eliminado satisfactoriamente', 'Eliminado');
        });
      }
    });
  }

  searchTo() {
    this.listAttribute();
  }
}
