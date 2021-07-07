const db = require('../db.js');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const SALT_ROUND = 10;

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('req.body : ', req.body);
  console.log('e, pw : ', email, password);
  db.find({ email, password }, (err, savedData) => {
    if (err) return;
    console.log('saveData : ', savedData);

    if (!savedData.length) {
      console.log('그런거 없수');
      res.redirect('/login');
      return;
    }

    console.log('그런거 있슴');
    res.redirect('/');
  });
});

router.post('/signup', (req, res) => {
  const { email, password, nickname, birth } = req.body;
  const encryptPassword = bcrypt.hashSync(password, SALT_ROUND);

  db.insert({ email, nickname, birth, password: encryptPassword }, (err, signupDB) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('signupDB : ', signupDB);
    res.redirect('/login');
  });
});

module.exports = router;
