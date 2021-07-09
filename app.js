const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const { uuid } = require('uuidv4');

const router = require('./routes/route.js');
const authRouter = require('./routes/auth.js');
const signupRouter = require('./routes/signup.js');

const app = express();
const port = process.env.PORT || 8080;
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/pages'));

app.use(express.static(path.join(__dirname, 'src')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  session({
    secret: 'AC1D396576A7ABB5F73AF68F8AE31',
    httpOnly: true,
    resave: true,
    saveUninitialized: true,
    // maxAge: 100 * 60 * 60 * 24,
    genid: (req) => uuid(),
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);

app.use('/', router);
app.use('/auth', authRouter);
app.use('/signup', signupRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
