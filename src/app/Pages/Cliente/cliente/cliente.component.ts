import { Component, OnChanges, OnInit } from '@angular/core';

import { MatModule } from '@shared/mat-module/mat.module';
import { HeaderComponentComponent } from '@components/header-component/header-component.component';
import { ClienteViewModel } from '@viewModels/Cliente';
import { ETipoPessoa } from '@dtos/enums/ETipoPessoa';
import { FormClienteFornecedorComponent } from '@components/form-cliente-fornecedor/form-cliente-fornecedor.component';



@Component({
  selector: 'app-cliente',
  imports: [
    MatModule,
    HeaderComponentComponent,
    FormClienteFornecedorComponent
],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent implements OnInit {

  displayColumns: string[] = [ 'id', 'nome', 'cpf', 'cnpj', 'email', 'status' ];
  clientes: ClienteViewModel[] = [
    {
      id: 1,
      nome: 'Erick', cpf: '12345678910', cnpj: '', email: 'erick@email.com', status: true,
      tipo: ETipoPessoa.Fisica
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(event: any): void {
    console.log(event);
    this.clientes = [...this.clientes, {
      id: this.clientes.length + 1,
      nome: event.nome,
      cpf: event.cpf,
      cnpj: event.cnpj,
      email: event.email,
      status: event.status,
      tipo: event.tipo
    }];
    console.log(this.clientes);
  }
}
