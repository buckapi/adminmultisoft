import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FilePickerModule } from  'ngx-awesome-uploader';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    FilePickerModule,
    HttpClientModule,
     CommonModule,
    EditRoutingModule,
    FormsModule
  ],exports:[FilePickerModule]
})
export class EditModule { }
