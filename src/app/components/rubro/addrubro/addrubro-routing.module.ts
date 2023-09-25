import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrubroComponent } from './addrubro.component';

const routes: Routes = [{ path: '', component: AddrubroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddrubroRoutingModule { }
