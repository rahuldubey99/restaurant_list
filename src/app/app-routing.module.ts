import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './MyComponents/add-resto/add-resto.component';
import { UpdateRestoComponent } from './MyComponents/update-resto/update-resto.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { ListRestoComponent } from './MyComponents/list-resto/list-resto.component';

const routes: Routes = [
  {
    component:AddRestoComponent,
    path:"add"
  },
  {
    component:UpdateRestoComponent,
    path:"update"
  },
  {
    component:ListRestoComponent,
    path:"list"
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:RegisterComponent,
    path:"register"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
