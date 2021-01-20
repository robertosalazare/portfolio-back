## Dynamodb and expressjs boilerplate code
This repository contains boilerplater code for a project working with Nodejs, Express and dynamodb. The structure of the code follows a Domain Driven Design and it implement the CQRS and mediator patterns.

> "Your architecture should tell readers about the system, not about the frameworks you used in your system" -Robert C. Martin.

### Dependencies:
- Nodejs and npm version 10+
- Dynamodb running locally in your computer (with java or docker)
- Docker (optional, only if you want to run the dynamodb instance with docker. Here is a [link](https://hub.docker.com/r/amazon/dynamodb-local) to dockerhub with the image and it have instructions on how to run it)
- Java Runtime Environment (optional, only if you want to run dynamo db directly with java. Here is a [link](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html) to the aws documentation on how to run it)

### How to run this project in development
```bash
git clone https://github.com/robertosalazare/blog-dynamodb-back.git
cd blog-dynamodb-back
npm install
npm run dev
```