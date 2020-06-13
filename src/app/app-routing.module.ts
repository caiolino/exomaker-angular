import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { Users } from './model/Users';
import { UsersComponent } from './users/users.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ItemComponent } from './item/item.component';




const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'users', component: UsersComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'delete-user/:id', component: DeleteUserComponent },
  { path: 'item/:id', component: ItemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
