import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.scss']
})
export class UsersLoginComponent {
  loginForm!: FormGroup;
  submitted: boolean = false;
  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      "username": new FormControl('',[Validators.required, Validators.minLength(3)]),
      "password": new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    
  }
  onLogin(){}
  navToRegister(){
    this.router.navigate(['/register']);
  }
}
  // onLogin(): void {
  //   if (this.loginForm.valid) {
  //     const username = this.loginForm.get('username')?.value;
  //     const password = this.loginForm.get('password')?.value;
  //     // Handle login logic here
  //     console.log('Login successful', { username, password });
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

