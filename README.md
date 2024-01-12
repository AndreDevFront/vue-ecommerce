# Ecommerce com vue 3

## Introdução

Criação de uma mini ecommerce utilizando VUE 3 , pinia, vite...


## Entidades / Modelos

### Product

- id
- name
- description
- price
- image

### Category

- id
- name
- description

### Cart

- produtos: `[{productId: 1, quantity: 3},{productId: 7, quantity: 5}]`

## Componentes

### ProductCard

## Pages

- / -> Todos os produtos
- /category/5 -> Produtos somente da categoria 5
- /cart -> Ver o carrinho de compras

## Instalação

```sh
npm install
```

### Compile + Hot-Reload (Desenvolvimento)

```sh
npm run dev
```

### Type-Check, Compile and Minify (Produção)

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
