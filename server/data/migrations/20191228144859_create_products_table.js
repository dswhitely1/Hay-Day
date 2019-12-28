exports.up = function(knex) {
  return knex.schema.createTable('products', tbl => {
    tbl.increments();
    tbl
      .string('name', 128)
      .notNullable()
      .unique();
    tbl
      .integer('sourceId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('sources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products');
};
