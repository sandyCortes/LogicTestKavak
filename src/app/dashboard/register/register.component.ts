import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/interfaces/Iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('/[A-Za-z0-9.!#$%&*+=?^_`{|}~-]*@+[a-z]*.+[com || es]/')]),
      name: new FormControl('', [Validators.required, Validators.pattern('/[a-zA-Z]*/')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('/[a-zA-Z]*/')]),
      phone: new FormControl('', [Validators.required,Validators.max(10), Validators.pattern('/[0-9]{10}/')]),
      key: new FormControl('', [Validators.required, Validators.pattern('/[0-9]*/')]),
      password: new FormControl('********', [Validators.required,]),
  });
  newUser: IUser;

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  Register() {
    this.newUser = this.registerForm.value;
    console.log(this.registerForm.value)
    this.userService.addNewUser(this.newUser)
  }
}
