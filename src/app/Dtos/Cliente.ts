import { Endereco } from "./Endereco";
import { ETipoPessoa } from "./enums/ETipoPessoa";
import { Telefone } from "./Telefone";

export interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  cnpj: string;
  tipo: ETipoPessoa;
  email: string;
  telefone: Telefone[];
  endereco: Endereco[];
  status: boolean;
  // dataCadastro: Date;
  // dataUltimaAtualizacao: Date;
}
