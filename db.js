const nedb = require('nedb');

const db = new nedb({
  filename: './datafile.db',
  autoload: true,
});

module.exports = db;
