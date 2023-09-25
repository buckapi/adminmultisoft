import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddrubroRoutingModule } from './addrubro-routing.module';
import { AddrubroComponent } from './addrubro.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FilePickerModule } from  'ngx-awesome-uploader';

@NgModule({
  declarations: [
    AddrubroComponent
  ],
  imports: [
    FilePickerModule,
    HttpClientModule,
     CommonModule,
    AddrubroRoutingModule,FormsModule
  ],exports:[FilePickerModule]
})
export class AddrubroModule { }
