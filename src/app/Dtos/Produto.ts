export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  categoria: Categoria;
  codigoBarras: string;
  unidadeMedida: string;
  precoCusto: number;
  precoVenda: number;
  quantidadeEstoque: number;
  estoqueMinimo: number;
  estoqueMaximo: number;
  localizacao: string;
  status: boolean;
  dataCadastro: Date;
  dataUltimaAtualizacao: Date;
}

export interface Categoria {
  id: number;
  nome: string;
  descricao: string;
}
