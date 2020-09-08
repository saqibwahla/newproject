import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPageComponent} from './admin-page/admin-page.component'
import { CustomerPageComponent } from './customer-page/customer-page.component';

const routes: Routes = [
  {
    path: 'admin',
    component:AdminPageComponent
  },
  {
    path: '',
    component:CustomerPageComponent, pathMatch: "full"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
