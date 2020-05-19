import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://93.188.161.223:9000/user');
  }

  postUser(Users: Users){
    return this.http.post('http://93.188.161.223:9000/user',Users)
  }
}
