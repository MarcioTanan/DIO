Desafio Bootcamp Santander 2023.

Java RESTful API criada para o Bootcamp Santander

##Diagrama de Classe

```mermaid
classDiagram
  class User {
    -String name
    -Account registro
    -Feature[] features
    -Card filmes
    -News[] news
  }

  class Account {
    -String number
    -String agency
    -Number balance
    -Number limit
  }

  class Feature {
    -String icon
    -String description
  }

  class Card {
    -String number
    -Number limit
  }

  class News {
    -String icon
    -String description
  }

  User "1" *-- "1" Account
  User "1" *-- "N" Feature
  User "1" *-- "1" Card
  User "1" *-- "N" News
```
