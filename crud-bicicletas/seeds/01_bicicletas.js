/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('bicicletas').del()
  await knex('bicicletas').insert([
    { color: 'Rojo', modelo: 'Avow adavance 2018', lat: 19.284779, long: -99.137296 },
    { color: 'Azul', modelo: 'Specialized Tarmac SL6', lat: 19.286055, long: -99.136991 },
    { color: 'Verde', modelo: 'Cannodale Trail', lat: 19.286055, long: -99.136991 }
  ]);
};
