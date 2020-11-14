FROM node:10-alpine

WORKDIR /app

COPY . .

RUN npm install && npm run build

CMD npm run start
