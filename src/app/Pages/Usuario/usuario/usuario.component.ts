import { Component, OnInit } from '@angular/core';
import { MatModule } from '@shared/mat-module/mat.module';
import { HeaderComponentComponent } from "../../../Components/header-component/header-component.component";
import { ENivelAcesso } from '../../../Dtos/enums/ENivelAcesso';
import { UsuarioViewModel } from '@viewModels/UsuarioViewModel';

@Component({
  selector: 'app-usuario',
  imports: [
    HeaderComponentComponent,
    MatModule,
],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit {

  displayColumns: string[] = [ 'id', 'nome', 'email', 'nivelAcesso' ];
  usuarios: UsuarioViewModel[] = [
    {
      id: 1,
      nome: 'João',
      email: 'joao@email.com',
      nivelAcesso: ENivelAcesso.ADMINISTRADOR
    },
    {
      id: 2,
      nome: 'Pedro',
      email: 'pedro@email.com',
      nivelAcesso: ENivelAcesso.VENDEDOR
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
