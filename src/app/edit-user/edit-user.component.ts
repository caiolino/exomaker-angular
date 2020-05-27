import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Users } from '../model/Users';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: Users = new Users;

  confirm: Users = new Users

  alerta: boolean = false

  constructor(private usersService: UsersService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.usersService.getByIdUser(id).subscribe((resp: Users) => {
      this.user = resp
    })
  }

  salvar() {
    if(this.user.senha!=this.confirm.senha){
      this.alerta = true
    }else{
      this.usersService.putUser(this.user).subscribe((resp: Users) => {
        this.user = resp
        this.router.navigate(['/users'])
        location.assign('/users')
      })
    }
  }

}
