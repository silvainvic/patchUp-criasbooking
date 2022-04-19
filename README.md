# Desafio parte 1 de 3 - Patch-up!

Este repositório é dedicado a exercícios complementares fora do conteúdo do course e das aulas ao vivo #VQV

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do desafio a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos (este desafio não possui avaliação, mesmo sendo necessário o push do resultado final).

# Contexto

Você e sua equipe estão trabalhando no projeto de um portal de turismo. Uma das funcionalidades é a possibilidade de realizar reservas por meio de B2B (Business to Business), ou seja, a aplicação de sua empresa conversará diretamente com a aplicação das empresas parceiras. 

A empresa Crias Booking disponibilizou o seguinte endpoint para a realização de reservas no sistema dela:



As regras de negócio consistem em:

- consumir a API da Crias Booking para realizar uma reserva;
- gravar localmente a resposta da API para facilitar consultas futuras;
- usuários precisam estar autenticados para realizar a reserva.


---

## O que deverá ser desenvolvido

Você vai arquiteturar e desenvolver uma API de um sistema de portal de turismo. Começando pela API, você vai desenvolver alguns endpoints (seguindo os princípios do REST).

### Sugestões para o desenvolvimento:

- inicie pelo consumo da API de reserva:
   - teste mannualmente o uso da API para conhecê-la
   - validar a comunicação e garantir a integração com o sistema externo
   - estruture em camadas (_a api estará em qual camada?_)
- adicione autenticação após o consumo da API
- decida qual a melhor forma de armazenar os dados retornados da API externa neste momento
- dockerize a aplicação ao final (você usará esta estrutura na parte 2 do desafio)

## API Crias Booking

Para criar uma reserva no sistema do Crias Booking é necessário realizar uma requisição por POST passando os seguintes dados: client, room, days, reservationDate, totalPrice. 

Estes dados devem ser enviados no payload do Body em formato Json.

O caminho para API é: `140.238.186.141:3001/reservations`


---

## Consumindo API externa

Utilize uma biblioteca Client HTTP:

- [Node Fetch](https://www.npmjs.com/package/node-fetch) - similar ao uso já conhecido no módulo de frontend
- [Axios](https://www.npmjs.com/package/axios)

### Exemplo com axios

```
axios.post('http://140.238.186.141:3001/reservations', {
    client: 'Homer Simpson', 
    room: 'Suite Master Super',
    days: 4, 
    reservationDate: '2022-04-30', 
    totalPrice: 2000
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

```
---
