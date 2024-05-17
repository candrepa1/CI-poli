FROM node:21-alpine

WORKDIR /project

COPY package.json .

RUN npm install

COPY . .

ENV DB_HOST=host.docker.internal

RUN npm run db:migrate

RUN npm run db:seed

CMD ["npm", "start"]