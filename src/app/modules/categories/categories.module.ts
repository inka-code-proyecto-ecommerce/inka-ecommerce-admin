import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategorieComponent } from './category.component';
import { CreateCategorieComponent } from './create-category/create-categorie.component';
import { EditCategorieComponent } from './edit-category/edit-categorie.component';
import { DeleteCategorieComponent } from './delete-category/delete-categorie.component';
import { ListCategorieComponent } from './list-category/list-categorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CategorieComponent,
    CreateCategorieComponent,
    EditCategorieComponent,
    DeleteCategorieComponent,
    ListCategorieComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterOutlet,
    FormsModule,
    NgbPaginationModule
  ]
})
export class CategoryModule { }
