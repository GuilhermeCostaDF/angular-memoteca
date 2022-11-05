import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Curso Alura',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Curso Alura',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Estou pegando as informações do listar pensamentos',
      autoria: 'Curso Alura',
      modelo: 'modelo2'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
