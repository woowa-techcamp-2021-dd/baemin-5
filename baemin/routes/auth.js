const db = require('../db.js');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.find({ email }, (err, savedData) => {
    if (err) return;
    const findData = savedData[0];

    if (!findData) {
      console.log('그런 이메일 없수');
      res.redirect('/login');
      return;
    }

    const isValidPassword = bcrypt.compareSync(password, findData.password);

    if (!isValidPassword) {
      console.log('비밀번호 틀렸수');
      res.redirect('/login');
      return;
    }

    if (!req.session.user) req.session.user = findData;

    console.log('로그인 성공!');
    res.cookie('sessionID', req.sessionID);
    res.redirect('/');
  });
});

module.exports = router;
