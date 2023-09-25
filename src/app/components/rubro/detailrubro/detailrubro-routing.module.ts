import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailrubroComponent } from './detailrubro.component';

const routes: Routes = [{ path: '', component: DetailrubroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailrubroRoutingModule { }
