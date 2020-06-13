import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProdutos: Produto[];

  nome_produto: String;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.produtosService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    })
  }

  findNome(){
    this.produtosService.findBynome(this.nome_produto).subscribe((resp:Produto[])=>{
      this.listaProdutos = resp
    })
  }

}
