import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailrubroRoutingModule } from './detailrubro-routing.module';
import { DetailrubroComponent } from './detailrubro.component';


import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DetailrubroComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    DetailrubroRoutingModule, SweetAlert2Module.forRoot()
  ]
})
export class DetailrubroModule { }
