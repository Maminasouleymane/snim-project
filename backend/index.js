const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const dotenv = require("dotenv").config();
const cors = require("cors");
const arret = require("./routers/arret");
const operation = require("./routers/operation");
const liaison = require("./routers/liaison");
const groupe = require("./routers/groupe");
const auxilier = require("./routers/auxilier");
const creation = require("./config/db.creation");
const db = require("./models");
const app = express();

const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3009;

app.use(express.json());
app.use(cors());

// ? routes
app.use(arret);
app.use(operation);
app.use(liaison);
app.use(auxilier);
app.use(groupe);

server.listen(port, () => {
  console.log(`server is up on port ${port} !`);
});
