import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLoginComponent } from './users-login/users-login.component';
import { UsersRegisterComponent } from './users-register/users-register.component';

const routes: Routes = [
  { path: 'login', component: UsersLoginComponent },
  { path: 'register', component: UsersRegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }  // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
