import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditclienteRoutingModule } from './editcliente-routing.module';
import { EditclienteComponent } from './editcliente.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FilePickerModule } from  'ngx-awesome-uploader';

@NgModule({
  declarations: [
   EditclienteComponent
  ],
  imports: [
    FilePickerModule,
    HttpClientModule,
     CommonModule,
    EditclienteRoutingModule,FormsModule
  ],exports:[FilePickerModule]
})
export class EditclienteModule { }
