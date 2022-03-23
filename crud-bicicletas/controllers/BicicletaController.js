// controllers/PagesController.js
// Importa el modelo de productos
let BicicletaModel = require('../models/BicicletaM')

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  // Nota que la consulta a los productos utiliza "promesas"
  // conoce más en: 
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
  BicicletaModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let bicicletas = data;
      // Enviamos los datos a la vista
      res.render('bicicletas/index', { bicis: bicicletas });
    });
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function(req, res){
    BicicletaModel.add(req.body.color, req.body.modelo, req.body.lat, req.body.lon)
    res.redirect('/bicicletas')
} 
