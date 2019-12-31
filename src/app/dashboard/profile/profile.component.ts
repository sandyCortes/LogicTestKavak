import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IUser } from 'src/app/interfaces/Iuser';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/services/httpClient.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UserData: IUser;
  registerForm: FormGroup;
  editUser: IUser;
  infoUser: any[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UsersService,
    private http: HttpClientService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (param: Params) => {
        this.UserData = this.userService.searchByEmail(param.email);
        this.inicializate(this.UserData);
      })
      this.http.getInfo().subscribe(data => {
        this.infoUser.push(data);
        console.log(this.infoUser);
      });
  }
  inicializate(params: any) {
    this.registerForm = new FormGroup({
      email: new FormControl(params.email, [Validators.pattern('/[A-Za-z0-9.!#$%&*+=?^_`{|}~-]*@+[a-z]*.+[com || es]/')]),
      name: new FormControl(params.name, [Validators.pattern('/[a-zA-Z]*/')]),
      lastName: new FormControl(params.lastName, [Validators.pattern('/[a-zA-Z]*/')]),
      phone: new FormControl(params.phone, [Validators.pattern('/[0-9]{10}/')]),
      key: new FormControl(params.key, [Validators.pattern('/[0-9]*/')]),
      password: new FormControl('********'),
    });
  }

  UploadInfo() {
    console.log(this.registerForm);
    this.editUser = this.registerForm.value;
    this.userService.editUser(this.editUser);
  }
}
