// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Obtiene todos los productos en la base
exports.all = () => {
	return knex
	.select('*')
	.from('bicicletas');
}


// Crea un nuevo Producto (pero no lo almacena en la base)
exports.add = (color, modelo, lat, long) => {
     knex('bicicletas').insert({color: color, modelo: modelo, lat: lat, long: long})
      .then( function (result) {
          console.log(' -Inserted- ');
       })
}

// Obtiene todos los productos en la base
exports.delete = (id) => {
  // Realiza la consulta dentro de knex
  knex('bicicletas').del()
  .where({id:id})
    .then( function (result) {
          console.log(' -Delete- ');
       })
}

// Obtiene todos los productos en la base
exports.show = (id) => {
	return knex
	.from('bicicletas')
	.where('id', id)
	.first()
}

