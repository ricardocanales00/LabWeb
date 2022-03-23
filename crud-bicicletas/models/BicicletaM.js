// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

let Bicicleta = function(color, modelo, lat, long){
    this.color = color
    this.modelo = modelo
    this.lat = lastThis
    this.long = long
}

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.add = (color, modelo, lat, long) => {
     knex('bicicletas').insert({color: color, modelo: modelo, lat: lat, long: long})
      .then( function (result) {
          console.log(' -Success- ');
       })
}

// Obtiene todos los productos en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('bicicletas');
}