import { Endereco } from "@dtos/Endereco";
import { ETipoPessoa } from "@dtos/enums/ETipoPessoa";
import { Telefone } from "@dtos/Telefone";


export interface FornecedorViewModel {
  id: number;
  nome: string;
  cnpj: string;
  cpf: string;
  tipo: ETipoPessoa;
  endereco?: Endereco[];
  telefone?: Telefone[];
  email: string;
  status: boolean;
  dataCadastro?: Date;
  dataUltimaAtualizacao?: Date;
}


