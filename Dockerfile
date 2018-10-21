FROM node:8.12.0-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm i
RUN npm run compile

EXPOSE 3000

CMD ["node", "dist/main.js"]