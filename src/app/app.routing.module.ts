import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './modules/products/products-list/products-list.component';
import { UsersLoginComponent } from './modules/users/users-login/users-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect to login by default
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
