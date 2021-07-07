<<<<<<< Updated upstream
const express = require('express');
const nedb = require('nedb');
const path = require('path');
const route = require('./route.js');
=======
const express = require("express");
const nedb = require("nedb");
const path = require("path");
const bodyParser = require("body-parser");
const route = require("./route.js");
>>>>>>> Stashed changes

const app = express();
const port = process.env.PORT | 8080;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/template'));

app.use(express.static(path.join(__dirname, 'src')));

<<<<<<< Updated upstream
app.use('/', route);
=======
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", route);

app.post("/", (req, res) => {
  console.log(req.body);
});

>>>>>>> Stashed changes
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
