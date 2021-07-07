const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('mainPage', { pageTitle: 'test' });
});

module.exports = router;
