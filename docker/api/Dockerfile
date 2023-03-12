FROM node:14-alpine

WORKDIR /app

COPY ./src/api/package*.json .

RUN npm i

RUN npm install -g nodemon

EXPOSE 5000

CMD ["nodemon"]
