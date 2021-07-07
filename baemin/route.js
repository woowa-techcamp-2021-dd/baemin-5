const express = require('express');
const router = express.Router();

const TITLE = '배민마트';

router.get('/', (req, res) => {
  res.render('mainPage', { pageTitle: `${TITLE}` });
});

router.get('/', (req, res) => {
  res.render('loginPage', { pageTitle: `${TITLE}` });
});

router.get('/agreement', (req, res) => {
  res.render('agreementPage', { pageTitle: `${TITLE}-약관 동의` });
});

router.get('/phone', (req, res) => {
  res.render('phonePage', { pageTitle: `${TITLE}-휴대전화` });
});

module.exports = router;
