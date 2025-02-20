import { Endereco } from "@dtos/Endereco";
import { ETipoPessoa } from "@dtos/enums/ETipoPessoa";
import { Telefone } from "@dtos/Telefone";


export interface ClienteViewModel {
  id: number;
  nome: string;
  cpf: string;
  cnpj: string;
  tipo: ETipoPessoa;
  email: string;
  telefone?: Telefone[];
  endereco?: Endereco[];
  status: boolean;
  dataCadastro?: Date;
  dataUltimaAtualizacao?: Date;
}
