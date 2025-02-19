import { Endereco } from "./Endereco";
import { ETipoPessoa } from "./enums/ETipoPessoa";
import { Telefone } from "./Telefone";

export interface Fornecedor {
  id: number;
  nome: string;
  cnpj: string;
  cpf: string;
  tipo: ETipoPessoa;
  endereco: Endereco[];
  telefone: Telefone[];
  email: string;
  status: boolean;
  // dataCadastro: Date;
  // dataUltimaAtualizacao: Date;
}


