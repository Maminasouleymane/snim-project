FROM node

WORKDIR /snimServer

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3009

CMD [ "npm", "run", "dev" ]