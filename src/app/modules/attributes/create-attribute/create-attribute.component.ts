import { Component } from '@angular/core';
import { AttributesService } from '../../attributes/service/attributes.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-attribute',
  templateUrl: './create-attribute.component.html',
  styleUrls: ['./create-attribute.component.scss']
})
export class CreateAttributeComponent {
  name: string = '';
  type_attribute: number = 1;
  isLoading$:any;

  constructor(
    public attributeService: AttributesService, 
    public modal: NgbActiveModal, 
    private toastr: ToastrService,
  ) {
      
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading$ = this.attributeService.isLoading$;
  }
  
  store() {
    if(!this.name || !this.type_attribute){
      this.toastr.error("Validación", "Todos los campos son necesarios");
      return;
    }
  }
}
