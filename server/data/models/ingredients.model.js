const db = require('../db.config');

function find() {
  return db('ingredients');
}
function findBy(filter) {
  return db('ingredients').where(filter);
}

module.exports = { find, findBy };
