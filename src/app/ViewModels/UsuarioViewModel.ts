import { ENivelAcesso } from "@dtos/enums/ENivelAcesso";

export interface UsuarioViewModel {
  id: number;
  nome: string;
  email: string;
  senha?: string;
  nivelAcesso: ENivelAcesso;
  dataCadastro?: Date;
  dataUltimaAtualizacao?: Date;
}
