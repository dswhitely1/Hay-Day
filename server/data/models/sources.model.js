const db = require('../db.config');

function find() {
  return db('sources');
}

module.exports = { find };
