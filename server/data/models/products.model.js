const db = require('../db.config');

function find() {
  return db('products');
}

module.exports = { find };
