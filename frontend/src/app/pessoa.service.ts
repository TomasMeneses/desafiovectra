import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'http://localhost:3333';
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.pessoasUrl}/api/pessoas`);
  }
  listarCpf(dados) {
    return this.http.get<any[]>(`${this.pessoasUrl}/api/pessoacpf/${dados}`);
  }
  cadastrar(dados) {
    return this.http.post(`${this.pessoasUrl}/api/pessoa`,dados,{ responseType: 'text'});
  }
  apagar(dados) {
    return this.http.delete(`${this.pessoasUrl}/api/pessoa/${dados.id}`,{ responseType: 'text'});
  }
}
