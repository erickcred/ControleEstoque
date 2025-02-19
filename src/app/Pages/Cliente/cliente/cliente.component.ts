import { Component, OnInit } from '@angular/core';
import { MatModule } from '@shared/mat-module/mat.module';
import { Cliente } from '../../../Dtos/Cliente';
import { ETipoPessoa } from '../../../Dtos/enums/ETipoPessoa';
import { HeaderComponentComponent } from "../../../Components/header-component/header-component.component";


@Component({
  selector: 'app-cliente',
  imports: [
    MatModule,
    HeaderComponentComponent
],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent implements OnInit {

  displayColumns: string[] = [ 'nome', 'cpf', 'cnpj', 'email', 'status' ];
  clientes: Cliente[] = [
    {
      id: 0,
      nome: 'Erick', cpf: '12345678910', cnpj: '', email: 'erick@email.com', status: true,
      tipo: ETipoPessoa.Fisica,
      telefone: [],
      endereco: [],
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
