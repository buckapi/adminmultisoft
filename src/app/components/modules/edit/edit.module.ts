import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FilePickerModule } from  'ngx-awesome-uploader';
import { SelectDropDownModule } from 'ngx-select-dropdown'
@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    SelectDropDownModule,
    FilePickerModule,
    HttpClientModule,
     CommonModule,
    EditRoutingModule,FormsModule
  ],exports:[FilePickerModule]
})
export class  EditModule { }
