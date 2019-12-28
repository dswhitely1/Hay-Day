exports.up = function(knex) {
  return knex.schema.createTable('ingredients', tbl => {
    tbl
      .integer('productId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('products')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('ingredientId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('products')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.integer('quantity').notNullable();
    tbl.primary(['productId', 'ingredientId']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients');
};
