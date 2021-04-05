# post-service

## Descrição

O serviço tem como objetivo gerenciar as operações relacionadas aos posts (anúncios) da aplicação. Serão disponibilizadas no serviço
as funcionalidades:
  * criar um post
  * recuperar todos os posts
  * recuperar posts por id de usuário
  * deletar um post
  * atualizar um post


## Rotas

POST localhost:3000/posts

Authorization: Bearer Token


  ` Request: `
  
  ```json
  {
      "name": "string",
      "description": "string",
      "imgUrl": "string",
      "user": "string"
  }
  
  ```

    
  ` Response: `

```json 
  
  {
     "post": {
        "_id": "string",
        "name": "string",
        "description": "string",
        "imgUrl": "string",
        "user": "string",
        "createdAt": "string",
        "__v": "integer"
      }
  }

```

GET localhost:3000/posts


` Response: `


```json
{
  "posts": [
    {
      "_id": "string",
      "name": "string",
      "description": "string",
      "imgUrl": "string",
      "user": "string",
      "createdAt": "string",
      "__v": "integer"
    }
  ]
}

```


GET localhost:3000/usuario/posts?userId={userId}

Authorization: Bearer Token


` Response: `


```json
{
  "posts": [
    {
      "_id": "string",
      "name": "string",
      "description": "string",
      "imgUrl": "string",
      "user": "string",
      "createdAt": "string",
      "__v": "integer"
    }
  ]
}

```


DELETE localhost:3000/posts/{postId}

` Response: `

```json

{
  "success": true
}


```




