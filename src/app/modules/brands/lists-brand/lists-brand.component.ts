import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrandService } from '../service/brand.service';
import { EditBrandComponent } from '../edit-brand/edit-brand.component';
import { CreateBrandComponent } from '../create-brand/create-brand.component';
import { DeleteBrandComponent } from '../delete-brand/delete-brand.component';

@Component({
  selector: 'app-lists-brand',
  templateUrl: './lists-brand.component.html',
  styleUrls: ['./lists-brand.component.scss']
})
export class ListsBrandComponent {
  brands: any = [];
  search: string = '';
  totalPages: number = 0;
  currentPage: number = 1;

  isLoading$: any;
  constructor(
    public brandService: BrandService,
    public modalService: NgbModal,
  ) {

  }

  ngOnInit(): void {
    this.listBrands();
    this.isLoading$ = this.brandService.isLoading$;
  }

  listBrands(page = 1) {
    this.brandService.listBrands(page, this.search).subscribe((resp: any) => {
      console.log(resp);
      this.brands = resp.brands;
      this.totalPages = resp.total;
      this.currentPage = page;
    })
  }

  searchTo(){
    this.listBrands();
  }

  loadPage($event: any) {
    console.log($event);
    this.listBrands($event);
  }

  openModalCreateBrand() {
    const modalRef = this.modalService.open(CreateBrandComponent, { centered: true, size: 'md' });

    modalRef.componentInstance.AttributeC.subscribe((attrib: any) => {
      this.brands.unshift(attrib);
    })
  }

  openModalEditBrand(attribute: any) {
    const modalRef = this.modalService.open(EditBrandComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.attribute = attribute;

    modalRef.componentInstance.AttributeE.subscribe((attrib: any) => {
      //this.brands.unshift(attrib);
      let INDEX = this.brands.findIndex((item: any) => item.id == attrib.id);
      if (INDEX != -1) {
        this.brands[INDEX] = attrib;
      }
    })
  }

  deleteBrand(attribute: any) {
    const modalRef = this.modalService.open(DeleteBrandComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.attribute = attribute;

    modalRef.componentInstance.AttributeD.subscribe((resp: any) => {
      let INDEX = this.brands.findIndex((item: any) => item.id == attribute.id);
      if (INDEX != -1) {
        this.brands.splice(INDEX, 1);
      }
    })
  }

}
