import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/Iuser';
import { never } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: IUser[] = [
    { email: 'sandy@tese.com', name: 'Sandy', lastName: 'Francisco', phone: 5546958690, key: 123456789, password: 'Pi=3.1416'},
    { email: 'user1@tese.com', name: 'User 1', lastName: 'Apellido 1', phone: 8547524141, key: 987654321, password: 'Pi=3.1416'},
    { email: 'user2@tese.com', name: 'User 2', lastName: 'Apellido 2', phone: 4545412222, key: 369852147, password: 'Pi=3.1416'},
    { email: 'user3@tese.com', name: 'User 3', lastName: 'Apellido 3', phone: 5545361523, key: 147852369, password: 'Pi=3.1416'},
    { email: 'user4@tese.com', name: 'User 4', lastName: 'Apellido 4', phone: 4544552222, key: 741258963, password: 'Pi=3.1416'},
    { email: 'user5@tese.com', name: 'User 5', lastName: 'Apellido 5', phone: 5115221222, key: 852369741, password: 'Pi=3.1416'},
  ];
  constructor() { }

  editUser(user: IUser) {
    for(var count = 0; count < this.user.length; count++) {
      if(this.user[count].email === user.email){
        this.user[count].lastName = user.lastName;
        this.user[count].phone = user.phone;
        this.user[count].key = user.key;
        this.user[count].password = user.password;
      }
    }
  }

  searchUser(email: string, password: string) {
    for(var count = 0; count < this.user.length; count++) {
      if(this.user[count].email === email && this.user[count].password === password)
        return true;
    }
    return false;
  }

  searchEmail(email: string) {
    for(var count = 0; count < this.user.length; count++) {
      if(this.user[count].email === email)
        return true;
    }
    return false;
  }

  addNewUser(newUser: IUser) {
    let search = this.searchEmail(newUser.email);
    if(search)
      return 'Este email, ya lo utiliza otro usuario existente';
    else {
      this.user.push(newUser);
      return 'Usuario registrado con exito';
    }
  }

  searchByEmail(email: string) {
    for(var count = 0; count < this.user.length; count++) {
      if(this.user[count].email === email) {
        return this.user[count];
      }
    }
  }
}
