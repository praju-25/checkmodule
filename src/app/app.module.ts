import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubCategoryListComponent } from './sub-category-list/sub-category-list.component';
import { AddCategoryListComponent } from './add-category-list/add-category-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {HttpClientModule}from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    SubCategoryListComponent,
    AddCategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    NgxDropzoneModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
