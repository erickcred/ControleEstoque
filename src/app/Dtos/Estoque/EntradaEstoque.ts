import { Fornecedor } from "../Fornecedor";

export interface EntradaEstoque {
  id: number;
  fornecedor: Fornecedor
  dataCadastro: Date;
  nomeResponsavel: string;
}
