import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  registerForm!: FormGroup;

  constructor() {
    
    this.registerForm = new FormGroup({
      "id": new FormControl(null),
      "name": new FormControl('', [Validators.required, Validators.minLength(3)]),
      "description": new FormControl('', Validators.required),
      "userId": new FormControl(null, Validators.required),
      "priority":new FormControl(null,),
    });
    
  }
  navToRegister(){
    
  }
}
