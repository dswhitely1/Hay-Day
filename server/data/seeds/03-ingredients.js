exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { productId: 2, ingredientId: 79, quantity: 2 },
        { productId: 2, ingredientId: 50, quantity: 2 },
        { productId: 3, ingredientId: 78, quantity: 3 },
        { productId: 4, ingredientId: 50, quantity: 2 },
        { productId: 4, ingredientId: 78, quantity: 2 },
        { productId: 4, ingredientId: 254, quantity: 1 },
      ]);
    });
};
