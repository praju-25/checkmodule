import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategoryListComponent } from './sub-category-list/sub-category-list.component';
import { AddCategoryListComponent } from './add-category-list/add-category-list.component';

const routes: Routes = [
   {path:"subcategory",component:SubCategoryListComponent},
   {path:"add_subcategory",component:AddCategoryListComponent},
   {path:"add_subcategory/:id",component:AddCategoryListComponent},
 {path: "",redirectTo:"/subcategory",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
