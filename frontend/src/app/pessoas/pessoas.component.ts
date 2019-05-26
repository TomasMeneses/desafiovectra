import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  constructor(private pessoaService: PessoaService ) { }

  pessoa: any = {
    id: '',
    nome: '',
    cpf: '',
    idade: '',
    peso: '',
    altura: '',
    imc: ''
  }

  pessoaBusca: any = {
    cpfBusca: ''
  };

  pessoas : Array<any>;

  ngOnInit() {
    this.listar();
  }

  testaCpf(pessoaCpf)  {
    let cpf = pessoaCpf;
    if (cpf == null) {
      return false;
  }
    if (cpf.length != 11) {
    return false;
  }
    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
    return false;
  }
    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);
    for (let i: number = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i);
      if (numeros.search(caracter) == -1) {
        return false;
      }
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
  }
    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
      digito1 = 0;
  }
    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;
    for (let i: number = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
  }
    resto = somatorio % 11;
    digito2 = 11 - resto;
    if (digito2 > 9) {
      digito2 = 0;
  }
    cpfAux = cpfAux + digito2;
    if (cpf != cpfAux) {
      return false;
  } else {

    return true;
  }

}
  verificaCpf(cpf){
    let i, retorno;
    for (i = 0; i < this.pessoas.length; i++){
      if (this.pessoas[i].cpf == cpf){
        retorno = true;
        break;
      } else {
        retorno = false;
      }
    }
    return retorno;
  }
  verificaCampos(dados){
    if(dados.nome == "" || dados.imc == "" || dados.idade == "" || dados.peso == "" || dados.altura == "" ||
      dados.nome == null || dados.imc == null || dados.idade == null || dados.peso == null || dados.altura == null ||
      dados.nome == undefined || dados.imc == undefined || dados.idade == undefined || dados.peso == undefined ||
      dados.altura == undefined
    ) {
      return true;
    } else {
      return false;
    }
  }
  calculaImc(pessoa) {
   pessoa.imc = pessoa.peso / (pessoa.altura * pessoa.altura);
   this.pessoa.imc = pessoa.imc.toFixed(2);
  }

  listar() {
  this.pessoaService.listar().subscribe((dados) => {
      this.pessoas = dados;

    });
  }

  listarCpf(pessoacpf) {
    if(pessoacpf.cpfBusca === "" || !pessoacpf.cpfBusca) {
      this.listar();
    }else {
      this.pessoaService.listarCpf(pessoacpf.cpfBusca).subscribe((dados) => {
      this.pessoas = dados;
      console.log(dados);
      });
    }
  }

  cadastrar(dados) {

    if(this.verificaCampos(dados)){
      alert('Preencha todos os campos');
    } else {
      if(this.verificaCpf(dados.cpf)) {
        alert('CPF ja cadastrado!');
      } else {
        this.pessoaService.cadastrar(dados).subscribe((data:any) => {
        this.listar();
        });
      }
    }
  }

  apagar(dados) {
    if(confirm('Deseja realmente apagar este usuário?')){
      this.pessoaService.apagar(dados).subscribe((data:any) =>{
        this.listar();
        console.log('Apagado com Sucesso');
      });
    }
  }

}
