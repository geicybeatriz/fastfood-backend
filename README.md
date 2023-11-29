# Documentação da Fastfood API

<div align="center">

  <h3></h3>

  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/> 
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>


## Descrição

A Fastfood API oferece endpoints para gerenciar pedidos e produtos em uma aplicação de fast-food. Permite aos usuários criar pedidos, atualizar seus status, recuperar detalhes dos pedidos e gerenciar informações de produtos.

## Rotas

### Pedidos

- **POST /orders**:

  - __Descrição:__ Cria um novo pedido com os produtos especificados, incluindo adicionais e observações do cliente.
  - __Corpo da Requisição:__
    ```json
    {
      "name": "Joe Doe",
      "payment": "credit_card",
      "productsList": [
        {
          "productId": 1,
          "quantity": 2,
          "observations": "more cheese",
          "additionals": [1, 2]
        },
        // ...other products
      ]
    }
    ```
  - __Resposta:__
    ```json
    {
      "id": 1,
      "name": "Joe Doe",
      "amount": 14.8,
      "createdAt": "2023-11-28T22:44:10.390Z",
      "itemDetails": [{
        "quantity": 1,
        "observations": "more cheese",
        "product": {
          "name": "BBQ Chicken Sandwich"
        },
        "itemAdditional": [{
          "additional": {
            "name": "Bacon"
          }},{
          "additional": {
            "name": "Queijo"  
          }
        }]
      }],
      // ...order details
    }
     ```
  

- **GET /orders**:

  - __Descrição:__ Recupera todos os pedidos, exceto aqueles com status "cancelled".
  - __Resposta:__
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "payment": "debit_card",
        "status": "preparing",
        "createdAt": "2023-11-23T20:04:11.118Z",
        "updatedAt": "2023-11-23T20:04:13.761Z",
        "amount": 81.6,
        "itemDetails": [{}],
        "itemAdditional": [{}]
        // ...order details
      },{
      // ...other orders
     }
    ]  
    ```

- **PUT /orders/:orderID**:

  - __Descrição:__: Atualiza o status do pedido específico, através de um ID.

  - __Parâmetros da Requisição:__ 
    - __orderId__: ID do pedido a ser atualizado.
  
  - __Corpo da Requisição:__
    ```json
    {
      "status": "completed"
    }
    ```
  - __Resposta:__
    ```json
    {
      "id": 13,
      "status": "completed",
      // ...detalhes do pedido atualizado
    }
    ```
  
- **GET /orders/status**:

  - __Descrição:__ Recupera pedidos agrupados por status.
  - __Resposta:__
    ```json
    {
      "completed": [
        // ...pedidos concluídos
      ],
      "preparing": [
        // ...pedidos em preparo
      ],
      // ...outras categorias de status
    }
    ```



### Produtos

- **GET /products**:

  - __Descrição:__ Busca todos os produtos cadastrados no banco de dados.
  - __Resposta:__
    ```json
    [
      {
        "id": 1,
        "name": "Turkey Avocado Wrap",
        "picture": "imagem do produto",
        "price": 15.8,
        "description": "Uma breve descrição do produto...",
        "category": "snacks"
      },
      // ...outros produtos
    ]
    ```

- **GET /products/search:**

  - __Descrição:__ Busca produtos através de um  termo recebido pela query strings.
  - __Parâmetro de Consulta:__
    - __termo:__ pode ser um número que representa o ID do produto ou parte do nome de um produto.
  - __Resposta:__
    ```json
    [
      {
        "id": 1,
        "name": "Turkey Avocado Wrap",
        "picture": "imagem do produto",
        "price": 15.8,
        "description": "Uma breve descrição do produto...",
        "category": "snacks"
      },
      // ...outros produtos
    ]

    //Se o parâmetro 'term' for  um número, ou seja se term = number , a resposta esperada é o produto com ID = term.
    ```
     
- **GET /products/product/:id**:

  - __Descrição:__ Busca detalhes de um produto específico.
  - __Parâmetros da Requisição:__
    - __id:__ ID do produto.
  - __Resposta:__
    ```json
    {
    
      "id": 1,
      "name": "Turkey Avocado Wrap",
      "picture": "imagem do produto",
      "price": 15.8,
      "description": "Uma breve descrição do produto...",
      "category": "snacks"
    }
    ```
    