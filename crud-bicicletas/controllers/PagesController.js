// controllers/PagesController.js
// Importa el modelo de productos
let BiciletaModel = require('../models/bicicleta')

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  // Nota que la consulta a los productos utiliza "promesas"
  // conoce más en: 
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
  BiciletaModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let bicicleta = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { bicicleta: bicicleta });
    });
}

// Reglas para la respuesta para la petición "/about"
exports.about = (req, res) => {
  res.send('About us');
}