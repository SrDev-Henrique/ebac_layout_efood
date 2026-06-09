# efood

Página inicial do efood criada com React, TypeScript, Create React App e styled-components. O projeto renderiza uma home estática com header, lista de 6 restaurantes mockados e footer, usando os assets locais disponíveis em `public/images`.

## Tecnologias

- React 18
- TypeScript
- Create React App / react-scripts
- styled-components
- Bun como gerenciador de pacotes

## Como rodar

Instale as dependências:

```bash
bun install
```

Inicie o ambiente de desenvolvimento:

```bash
bun run start
```

Gere o build de produção:

```bash
bun run build
```

## Estrutura

```text
public/
  images/              # Imagens usadas pela home
src/
  @/                   # Ponte para imports com alias @/
  components/          # Componentes visuais da página
  data/                # Restaurantes mockados
  pages/Home/          # Composição da página inicial
  styles/              # Estilos globais e tokens
  types/               # Tipos TypeScript compartilhados
```

## Arquitetura atual

- `src/pages/Home` compõe a página com `Header`, `RestaurantList` e `Footer`.
- `src/data/restaurants.ts` concentra os dados mockados dos restaurantes.
- `src/types/restaurant.ts` define os tipos usados pelos cards e pela lista.
- `src/styles/tokens.ts` centraliza cores, espaçamentos, medidas, breakpoints e tipografia.
- `src/styles/global.ts` aplica o reset básico e o fundo global.
- `src/@` permite imports no formato `@/components/...`, `@/data/...`, `@/styles/...` e `@/types/...`.

## Assets

As imagens utilizadas pela interface ficam em `public/images` e são referenciadas por caminho público, como:

```ts
'/images/sushi.png'
```

## Observações

O projeto usa uma home estática e não depende de API externa para renderizar a página inicial.
