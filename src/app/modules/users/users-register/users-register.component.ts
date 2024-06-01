import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.scss']
})
export class UsersRegisterComponent {
  registerForm!: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
     
      "username": new FormControl('', [Validators.required, Validators.minLength(3)]),
      "password": new FormControl('', [Validators.required,Validators.minLength(6)]),
      "email": new FormControl(null, [Validators.required,Validators.email]),
      "firstname":new FormControl(null,Validators.required),
       "lastname": new FormControl('',Validators.required),
    });
    
  }
  navToRegister(){}
  saveNewRegister(){}
}
