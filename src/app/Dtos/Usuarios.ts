import { ENivelAcesso } from "./enums/ENivelAcesso";

export interface Usuarios {
  id: number;
  nome: string;
  email: string;
  senha: string;
  nivelAcesso: ENivelAcesso;
  dataCadastro: Date;
  dataUltimaAtualizacao: Date;
}
