import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoriesService } from '../services/categorie.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-categorie.component.html',
  styleUrls: ['./delete-categorie.component.scss']
})
export class DeleteCategorieComponent {
  @Input() category: any;

  @Output() CategoryD: EventEmitter<any> = new EventEmitter();
  isLoading: any;
  constructor(
    public categorieService: CategoriesService,
    private toastr: ToastrService,
    public modal: NgbActiveModal,
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading = this.categorieService.isLoading$;
  }

  delete() {
    this.categorieService.deleteCategory(this.category.id).subscribe((resp: any) => {
      this.CategoryD.emit({ message: 200 });
      this.modal.close();
    })
  }
}
