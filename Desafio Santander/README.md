Desafio Bootcamp Santander 2023.

Java RESTful API criada para o Bootcamp Santander

##Diagrama de Classe

```mermaid
classDiagram
    class User {
        -name: String
        -account: Account
        -features: Feature[]
        -card: Card
    }

    class Account {
        -number: String
        -agency: String
        -balance: Float
        -limit: Float
    }

    class Feature {
        -icon: String
        -description: String
    }

    class Card {
        -number: String
        -limit: Float
    }

    User --> Account : contains
    User --> Feature : contains
    User --> Card : contains


```
