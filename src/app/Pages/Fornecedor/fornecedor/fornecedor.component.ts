import { Component, OnInit } from '@angular/core';
import { HeaderComponentComponent } from "../../../Components/header-component/header-component.component";
import { MatModule } from '@shared/mat-module/mat.module';
import { Fornecedor } from '../../../Dtos/Fornecedor';
import { ETipoPessoa } from '../../../Dtos/enums/ETipoPessoa';

@Component({
  selector: 'app-fornecedor',
  imports: [
    MatModule,
    HeaderComponentComponent,
  ],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.scss'
})
export class FornecedorComponent implements OnInit {

  displayColumns: string[] = [ 'nome', 'cpf', 'cnpj', 'email', 'status' ];
  fornecedores: Fornecedor[] = [
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
