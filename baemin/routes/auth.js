const db = require('../db.js');
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('req.body : ', req.body);
  console.log('e, pw : ', email, password);
  db.find(
    {
      phoneNumber: email,
      password,
    },
    (err, savedData) => {
      if (err) return;
      console.log('saveData : ', savedData);

      if (!savedData.length) {
        console.log('그런거 없수');
        res.redirect('/login');
        return;
      }

      console.log('그런거 있슴');
      res.redirect('/');
    },
  );
});

router.post('/signup', (req, res) => {
  db.insert(req.body, (err, signupDB) => {
    if (err) {
      console.error(err);
      return;
    }
    res.redirect('/login');
  });
});

module.exports = router;
