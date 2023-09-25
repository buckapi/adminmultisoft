import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllrubroComponent } from './allrubro.component';

const routes: Routes = [{ path: '', component: AllrubroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllrubroRoutingModule { }
