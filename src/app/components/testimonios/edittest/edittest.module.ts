import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdittestRoutingModule } from './edittest-routing.module';
import { EdittestComponent } from './edittest.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FilePickerModule } from  'ngx-awesome-uploader';

@NgModule({
  declarations: [
    EdittestComponent
  ],
  imports: [
    FilePickerModule,
    HttpClientModule,
     CommonModule,
    EdittestRoutingModule,FormsModule
  ],exports:[FilePickerModule]
})
export class EdittestModule { }
