export type ApiCardapioItem = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

export type ApiRestaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ApiCardapioItem[]
}
