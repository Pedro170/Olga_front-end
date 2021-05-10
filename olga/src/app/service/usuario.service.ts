import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
usuario : Usuario = new Usuario

  constructor(
    private http:HttpClient
  ) { }

  token = {
    headers: new HttpHeaders({'Authorization': environment.token, 'Content-Type':'application/json'})
  }
  
  getAllProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>('http://localhost:8080/produtos', this.token)
  }

  getOrganicos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>('http://localhost:8080/produtos/organicos?organicos=true', this.token)
  }
  /*tentativa de fazer com parametros não está funcionando*/
  getByNomeProduto(titulo: string): Observable<Produtos>{
    return this.http.get<Produtos>(`http://localhost:8080/produtos/nome/produto?titulo=${titulo}`, this.token)
  }

  getAllProdutores():Observable<Usuario>{
    return this.http.get<Usuario>('http://localhost:8080/usuarios/nome',this.token)

  }

  novoProduto(produto:Produtos, id_Usuario:number):Observable<Produtos>{
    let url = "http://localhost:8080/usuarios/produto/novo/"
    return this.http.post<Produtos>(url+id_Usuario,produto,this.token)
  }

  
}
