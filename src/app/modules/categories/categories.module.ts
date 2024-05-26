import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categories-routing.module';
import { CategorieComponent } from './categories.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { DeleteCategorieComponent } from './delete-categorie/delete-categorie.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
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
    CategorieRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterOutlet,
    FormsModule,
    NgbPaginationModule
  ]
})
export class CategoryModule { }
