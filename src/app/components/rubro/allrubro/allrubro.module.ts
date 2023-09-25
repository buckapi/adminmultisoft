import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllrubroRoutingModule } from './allrubro-routing.module';
import { AllrubroComponent } from './allrubro.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AllrubroComponent
  ],
  imports: [
    CommonModule,
    NgxUiLoaderModule,
    AllrubroRoutingModule
  ]
})
export class AllrubroModule { }
