import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent  },
  { path: 'faq', component: FaqComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'sobre', component: SobreComponent },
  {path: 'produtos', component: ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
