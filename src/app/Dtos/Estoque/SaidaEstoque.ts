import { Cliente } from "../Cliente";

export interface SaidaEstoque {
  id: number;
  cliente: Cliente;
  dataSaida: Date;
  nomeResponsavel: string;
}
