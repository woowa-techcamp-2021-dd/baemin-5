const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db.js');

const router = express.Router();
const SALT_ROUND = 10;

router.post('/agreement', (req, res) => {
  res.redirect('/phone');
});

router.post('/phone', (req, res) => {
  res.redirect('/userinfo');
});

router.post('/userinfo', (req, res) => {
  const { userinfo_email, userinfo_password, userinfo_nickname, userinfo_birth } = req.body;
  const encryptPassword = bcrypt.hashSync(userinfo_password, SALT_ROUND);

  db.insert(
    {
      email: userinfo_email,
      nickname: userinfo_nickname,
      birth: userinfo_birth,
      password: encryptPassword,
    },
    (err, signupDB) => {
      if (err) {
        console.error(err);
        return;
      }
      res.redirect('/login');
    },
  );
});

module.exports = router;
