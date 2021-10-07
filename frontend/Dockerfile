FROM node

WORKDIR /front

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8099

CMD [ "npm", "run", "dev-server" ]