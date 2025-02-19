export interface Endereco {
  id: number;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  latitude: number;
  longitude: number;
  dataCadastro: Date;
  dataUltimaAtualizacao: Date;
}
