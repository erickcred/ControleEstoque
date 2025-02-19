import { SaidaEstoque } from "./SaidaEstoque";
import { Produto } from "../Produto";

export interface ItensSaidaEstoque {
  id: number;
  saidaEstoque: SaidaEstoque;
  produto: Produto;
  quantidade: number;
  precoUnitario: number;
}
