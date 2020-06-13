import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAllProdutos() {
    return this.http.get('http://localhost:8080/produtos');
  }

  findBynome(nome_produto: String) {
    return this.http.get(`http://localhost:8080/produtos/produto/${nome_produto}`)
  }


  getByIdProduto(id: number) {
    return this.http.get(`http://localhost:8080/produtos/${id}`)
  }
}
