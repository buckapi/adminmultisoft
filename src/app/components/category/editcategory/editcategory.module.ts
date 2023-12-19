import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcategoryRoutingModule } from './editcategory-routing.module';
import { EditcategoryComponent } from './editcategory.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FilePickerModule } from  'ngx-awesome-uploader';

@NgModule({
  declarations: [
    EditcategoryComponent
  ],
  imports: [
    FilePickerModule,
    HttpClientModule,
     CommonModule,
    EditcategoryRoutingModule,FormsModule
  ],exports:[FilePickerModule]
})
export class EditcategoryModule { }
