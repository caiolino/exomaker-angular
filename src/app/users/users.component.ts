import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Users } from '../model/Users'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listaUsers: Users[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.findAllUsers()
  }

  findAllUsers() {

    this.usersService.getAllUsers().subscribe((resp: Users[]) => {
      this.listaUsers = resp;
    })

  }


}
