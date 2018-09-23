# <center>praxis-backend-workshop</center>

## Authors

- Sebastian Pino Sánchez - [@sebastianpinosanchez](https://github.com/sebastianpinosanchez)
- León Dario Peña Londoño - [@leonplondon](https://github.com/leonplondon)

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


## Continuous Integration (CI) and Continuous Delivery (CD)

### Solution to the DevOps workshop

For the implementation of CI and CD, we use CircleCI with the following steps:

1. Create a postinstall script in the `package.json`.

```json
"scripts": {
    ...

    "compile": "rm -rf dist/ && npx tsc",
    "postinstall": "npm run compile",

    ...
  },
```

Those scripts are used for Heroku to compile the code. 

Also we added a `Procfile` to indicate the entry point of the application (compiled files), and also the worked type.

```
web: node dist/main.js
```

2. Create a .circleci/config.yml to automate the CI and CD proccess.

* __Jobs:__
    * Build: This job is in charge to containerize the code and run the tests.
    * Deploy: This job is in charge to push the code in Heroku.


Each time a push is made to the Github repository, CircleCI is in charge for automatically performing CI / CD operations.