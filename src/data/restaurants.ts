import type { Restaurant } from '@/types/restaurant'

const italianDescription =
  'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto da sua casa. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'

export const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    rating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagem cuidadosa e qualidade garantida.',
    image: '/images/sushi.png',
    tags: [{ text: 'Destaque do dia' }, { text: 'Japonesa' }]
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description: italianDescription,
    image: '/images/italiana.png',
    tags: [{ text: 'Italiana' }]
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description: italianDescription,
    image: '/images/italiana.png',
    tags: [{ text: 'Italiana' }]
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description: italianDescription,
    image: '/images/italiana.png',
    tags: [{ text: 'Italiana' }]
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description: italianDescription,
    image: '/images/italiana.png',
    tags: [{ text: 'Italiana' }]
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description: italianDescription,
    image: '/images/italiana.png',
    tags: [{ text: 'Italiana' }]
  }
]
