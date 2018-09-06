# <center>praxis-backend-workshop</center>

##Authors

Sebastian Pino Sánchez - @sebastianpinosanchez
León Dario Peña Londoño - @leonplondon

## Description


Backend for the solution of the challenge, delivered in the **PSL** class by the intructor @Blesfia. The challenge integrates several components such as programming using the nestJS framework and integration with a NoSQL database (MongoDB). Finally the code is tested by Jest (javascript test system)

## Installation

```bash
$ npm install
```

## Running the app

### Environment variables
In order to run the app successfully you have to define the next environment variables:

* MONGODB_URL=`mongodb://[username:password@]host1[:port1][/[database][?options]]`



### Commands

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod

# compile app
npm run prestart:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

[Test coverage](https://praxis-backend-workshop.github.io/praxis-backend-workshop/)

