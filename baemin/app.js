const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const router = require('./routes/route.js');
const authRouter = require('./routes/auth.js');

const app = express();
const port = process.env.PORT | 8080;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/template'));

app.use(express.static(path.join(__dirname, 'src')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
