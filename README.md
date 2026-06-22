# 📖 Pokédex - JavaScript Developer (DIO)

Uma Pokédex interativa desenvolvida durante a formação **JavaScript Developer** da **DIO**, consumindo dados da **PokéAPI** através de requisições HTTP utilizando **Fetch API**.

Além das funcionalidades propostas no desafio original, o projeto foi expandido com uma tela de detalhes para cada Pokémon, permitindo visualizar informações adicionais ao clicar em qualquer item da lista.

## 🚀 Demonstração

A aplicação exibe os Pokémon da 1ª geração com:

* Número da Pokédex
* Nome
* Tipo(s)
* Imagem
* Paginação dinâmica
* Card de detalhes individual

Ao selecionar um Pokémon, é exibido um modal contendo:

* Experiência Base
* Altura
* Peso
* Base Stats
* Barras de progresso para visualização dos atributos

---

## 🛠 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API
* PokéAPI
* AOS (Animate On Scroll)

---

## 📚 Conceitos Praticados

* Consumo de APIs REST
* Requisições HTTP
* Manipulação de JSON
* Programação assíncrona com Promises
* Manipulação do DOM
* Eventos JavaScript
* Modularização de código
* Renderização dinâmica de componentes

---

## 🔗 API Utilizada

Este projeto utiliza a PokéAPI:

https://pokeapi.co/

Exemplo de endpoint utilizado:

```http
GET https://pokeapi.co/api/v2/pokemon/1
```

---

## ✨ Funcionalidades

### Lista de Pokémon

* Exibição dos Pokémon da 1ª geração
* Carregamento incremental através do botão "Load More"
* Cores dinâmicas baseadas no tipo principal do Pokémon

### Detalhes do Pokémon

* Modal de informações
* Número da Pokédex
* Nome
* Imagem oficial
* Tipos
* Experiência Base
* Altura
* Peso
* Estatísticas Base
* Barras de progresso para visualização dos atributos

---

## 📂 Estrutura do Projeto

```text
assets/
├── css/
├── js/
│   ├── ApiPokemon/
│   ├── Pokedex/
│   └── Models/
└── images/
```

---

## 💡 Aprendizados

Durante o desenvolvimento deste projeto foi possível aprofundar conhecimentos sobre:

* Integração entre Front-end e APIs REST
* Consumo de dados utilizando Fetch API
* Transformação de respostas JSON em objetos da aplicação
* Manipulação dinâmica da interface
* Organização e reutilização de código JavaScript

Além disso, o projeto serviu como oportunidade para implementar funcionalidades extras além das propostas inicialmente no desafio.

---

## 🔗 Repositório

Clone o projeto:

```bash
git clone https://github.com/Kamylacmd/js-developer-pokedex.git
```

---

## 👩‍💻 Autora

Desenvolvido por **Kamyla** durante a formação **JavaScript Developer** da **DIO**, com orientação do mentor **Renan Johannsen**.
