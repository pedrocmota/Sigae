export interface IModulo {
  loadingPagina: boolean,
  loadingModulo: boolean,
  render: boolean,
  nome?: string,
  icone?: any,
  componente?: React.FC
}