const express = require('express');
const router = express.Router();

const TITLE = '배민마트';

router.get('/', (req, res) => {
  const user = req.session.user;
  console.log('main user', user);
  res.render('mainPage/', { pageTitle: `${TITLE}`, user: user });
});

router.get('/login', (req, res) => {
  res.render('loginPage', { pageTitle: `${TITLE}` });
});

router.get('/agreement', (req, res) => {
  res.render('signupPage/agreementPage', { pageTitle: `${TITLE}-약관 동의` });
});

router.get('/phone', (req, res) => {
  res.render('signupPage/phonePage', { pageTitle: `${TITLE}-휴대전화` });
});

router.get('/signup', (req, res) => {
  res.render('signupPage/userInfoPage', { pageTitle: `${TITLE}-회원가입` });
});

module.exports = router;
