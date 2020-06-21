FROM node:latest

WORKDIR /client/app

RUN apt update && apt upgrade -y && apt install bash

RUN chown -R node:node /client

USER node

COPY --chown=node:node package*.json /client/app/
RUN npm install && npm cache clean --force

COPY --chown=node:node ./ /client/app/

EXPOSE 3000

CMD ["npm", "run", "start"]