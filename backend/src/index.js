const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const arret = require("./routers/arret");
const operations = require("./routers/operations");
const laison = require("./routers/laison_snim_sml");
const auxilier = require("./routers/auxiliers");
const groupe = require("./routers/groupe");

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 3009;

app.use(express.json());
app.use(cors());

// ? routes
app.use(arret);
app.use(operations);
app.use(laison);
app.use(auxilier);
app.use(groupe);

server.listen(port, () => {
  console.log(`server is up on port ${port} !`);
});
