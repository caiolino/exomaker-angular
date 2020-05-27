import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Users } from '../model/Users';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  user: Users = new Users
  delOk: boolean = false

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.usersService.getByIdUser(id).subscribe((resp: Users) => {
      this.user = resp
    }, err => {
      console.log(`Erro: ${err.status},não conseguimos pegar o id`)
    })
  }

  btnSim() {
    this.usersService.deleteUser(this.user.id).subscribe(() => {
      this.delOk = true
      //   this.router.navigate(['/users'])
      // localStorage.setItem("delOK",this.delOk.toString())
    })

  }

  btnNao() {
    this.router.navigate(['/users'])
  }

}
