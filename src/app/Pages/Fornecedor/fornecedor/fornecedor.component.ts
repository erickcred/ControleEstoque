import { Component, OnInit } from '@angular/core';
import { HeaderComponentComponent } from "../../../Components/header-component/header-component.component";
import { MatModule } from '@shared/mat-module/mat.module';
import { FornecedorViewModel } from '@viewModels/FornecedorViewModel';
import { ETipoPessoa } from '@dtos/enums/ETipoPessoa';


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

  displayColumns: string[] = [ 'id', 'nome', 'cpf', 'cnpj', 'email', 'status' ];
  fornecedores: FornecedorViewModel[] = [
    {
      id: 1,
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
