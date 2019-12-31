import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.pattern('/[A-Za-z0-9.!#$%&*+=?^_`{|}~-]*@+[a-z]*.+[com || es]/')]),
    password: new FormControl(''),
  });
  constructor(
    private searUser: UsersService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login() {
    let value = this.searUser.searchUser(this.loginForm.value.email, this.loginForm.value.password);
    if(value === true) {
      sessionStorage.setItem('login', 'true');
      this.router.navigate(['profile', this.loginForm.value.email]);
    } else{
      sessionStorage.setItem('login', 'false');
      alert('Correo o contraseña incorrectos')
    }
  }

}
