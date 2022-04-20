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

# Desafio parte 2 de 3 - Patch-up!

Este repositório é dedicado a exercícios complementares fora do conteúdo do course e das aulas ao vivo #VQV

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do desafio a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos (este desafio não possui avaliação, mesmo sendo necessário o push do resultado final).

# Contexto

Um novo conjunto de requisitos foi definido para esta [sprint](https://pt.wikipedia.org/wiki/Sprint_(desenvolvimento_de_software)) no projeto do portal de turismo que você e sua equipe estão trabalhando.

Após implementar a reserva consumindo a API da empresa parceira Crias Booking, é necessário refatorar com as funcionalidades de gestão destas reservas e maior estabilidade na aplicação. 

Para isto as regras de negócio desta sprint são:

- validar as entradas recebidas no endpoint de reservas, garantindo que não tentaremos consumir a API da Crias Booking enviando dados incompletos ou no formato não esperado pela API;
- criar um endpoint de consulta das reservas que retorne todas as reservas de um cliente:
   - este endpoint também necessita que os dados sejam validados antes de enviar a pesquisa ao banco de dados;
   - esta pesquisa somente pode ser feita pelo próprio usuário autenticado;
- rodar a aplicação em um contêiner Docker;

---

## O que deverá ser desenvolvido

Você vai arquiteturar e desenvolver a continuidade da API do sistema de portal de turismo. 

### Sugestões para o desenvolvimento:

- implemente o endpoint de consulta, use um cliente fixo
- refatore usando a autenticação, extraindo os dados do cliente a partir do token para realizar a consulta
- crie lógicas de validação dos inputs de maneira que seja possível seu reuso quando necessário
- aplique validação nas entradas de dados das requisições

# Desafio parte 3 de 3 - Patch-up!

Este repositório é dedicado a exercícios complementares fora do conteúdo do course e das aulas ao vivo #VQV

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do desafio a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos (este desafio não possui avaliação, mesmo sendo necessário o push do resultado final).

# Contexto

Sua equipe deve trabalhar em um novo sprint para o projeto de portal de turismo. Após implementar os requisitos centrais do projeto, que definiam a integração com API externa pelos usuários, nesta sprint foi definida a refatoração da camada de dados com o objetivo de garantir a sua integridade. Para isto é necessário associar corretamente o usuário às suas reservas.

As regras de negócio desta sprint são:

- refatorar o modelo de dados, criando o relacionamento entre usuário e reservas, de maneira que o id do usuário esteja presente na reserva, evitando futuras inconsistências por alterações do nome do usuário;
   - como estamos persistindo os dados de reserva que foram gerados no serviço da Crias Booking, e neste o nome é utilizado, em caso de alterações do nome em nossa base local, perderíamos este relacionamento;
- refatorar as pesquisas de reservas considerando o id do usuário e não o nome na reserva
- refatorar o endpoint de pesquisa de reservas para que, em caso de um parâmetro `after` existir na query string, os resultados sejam apenas para as datas de reserva a partir da data informada em `after`.

---

## O que deverá ser desenvolvido

Você vai arquiteturar e desenvolver a continuidade da API do sistema de portal de turismo. 

### Sugestões para o desenvolvimento:

- use novas migrations para alterar o banco de dados, não faça sobre as mesmas
- refatore a rotina que grava os dados de retorno da API externa para gravar o id de retorno (não é o mesmo campo id interno) e o id do usuário
- refatore as rotinas envolvidas na pesquisa de reservas para considerar o id do usuário ao invés do nome
- refatore as rotinas envolvidas na pesquisa de reservas para considerar um parâmetro de query `after` - lembre-se de trabalhar com a data no formato YYYY-MM-DD, por ex: 2022-04-20
