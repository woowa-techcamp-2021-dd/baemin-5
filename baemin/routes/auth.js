const db = require('../db.js');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const SALT_ROUND = 10;

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.find({ email }, (err, savedData) => {
    if (err) return;
    const findData = savedData[0];

    if (!findData) {
      console.log('그런거 없수');
      res.redirect('/login');
      return;
    }

    if (req.session.user) {
      console.log('세션에 저장이 됐따!');
      console.log('세션에 저장: ', req.session.user);
    } else {
      req.session.user = findData;
      console.log('else! ', req.session);
    }

    console.log('그런거 있슴');
    res.cookie('sessionID', req.sessionID);
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
    res.redirect('/login');
  });
});

module.exports = router;
