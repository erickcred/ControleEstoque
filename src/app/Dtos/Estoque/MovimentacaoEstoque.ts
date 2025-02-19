import { ETipoMovimentacao } from "../enums/ETipoMovimentacao";
import { Produto } from "../Produto";

export interface MovimentacaoEstoque {
  id: number;
  produto: Produto;
  tipoMovimentocao: ETipoMovimentacao;
  quantidade: number;
  tipo: string;
  data: Date;
}
