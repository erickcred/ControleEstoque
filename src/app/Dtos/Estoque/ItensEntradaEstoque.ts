import { EntradaEstoque } from "./EntradaEstoque";
import { Produto } from "../Produto";

export interface ItensEntradaEstoque {
  id: number;
  entradaEstoque: EntradaEstoque;
  produto: Produto;
  quantidade: number;
  precoUnitario: number;
}
