import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRESTGuard } from '@app/guards/authREST.guard';
const routes: Routes = [
  
  { path: 'home',loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  
  
  { path: 'c2oDetail', loadChildren: () => import('./components/click2order/detail/detail.module').then(m => m.DetailModule) },
  
  { path: 'c2oAll', loadChildren: () => import('./components/click2order/all/all.module').then(m => m.AllModule) },
  
  { path: 'c2oAdd', loadChildren: () => import('./components/click2order/add/add.module').then(m => m.AddModule) },

  { path: 'cateadd', loadChildren: () => import('./components/category/addcategory/addcategory.module').then(m => m.AddcategoryModule) },

  { path: 'cateall', loadChildren: () => import('./components/category/allcategory/allcategory.module').then(m => m.AllcategoryModule) },

  { path: 'catedetail', loadChildren: () => import('./components/category/detailcategory/detailcategory.module').then(m => m.DetailcategoryModule) },

  { path: 'clientadd', loadChildren: () => import('./components/clientes/addcliente/addcliente.module').then(m => m.AddclienteModule) },

  { path: 'clientall', loadChildren: () => import('./components/clientes/allcliente/allcliente.module').then(m => m.AllclienteModule) },

  { path: 'clientdetail', loadChildren: () => import('./components/clientes/detailcliente/detailcliente.module').then(m => m.DetailclienteModule) },

   { path: 'testadd', loadChildren: () => import('./components/testimonios/addtest/addtest.module').then(m => m.AddtestModule) },

  { path: 'testall', loadChildren: () => import('./components/testimonios/alltest/alltest.module').then(m => m.AlltestModule) },

  { path: 'testdetail', loadChildren: () => import('./components/testimonios/detailtest/detailtest.module').then(m => m.DetailtestModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
