import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRegisterComponent } from './users-register/users-register.component';
import { UsersLoginComponent } from './users-login/users-login.component';
import { DividerModule } from 'primeng/divider';
import { UsersListComponent } from './users-list/users-list.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users.routing.module';

@NgModule({
  declarations: [
    UsersRegisterComponent,
    UsersLoginComponent,UsersListComponent
  ],
  imports: [ReactiveFormsModule,
    CommonModule,ButtonModule,DividerModule,FormsModule,UsersRoutingModule
  ],
  exports:[UsersListComponent,UsersLoginComponent,UsersRegisterComponent]
})
export class UsersModule { }
