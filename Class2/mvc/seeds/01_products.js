// seeds/01_products.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'Coke', description: 'Una bebida refrescante', price: 80 },
        { name: 'Book', description: 'something for a boring class.', price: 25 },
        { name: 'Beer', description: 'Something to make class fun jeje', price: 38 },
      ]);
    });
};