let BicicletaModel = require('../models/bicicleta')

exports.index = (req, res) => {
     BicicletaModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let bicicletas = data;
      // Enviamos los datos a la vista
      res.render('bicicletas/index', { bicicletas: bicicletas });
    });
}


exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function(req, res){
    let temp_bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo)
    temp_bici.ubicacion = [req.body.lat, req.body.lon]
    Bicicleta.add(temp_bici)
    res.redirect('/bicicletas')
} 

exports.bicicleta_delete_post = function(req, res){
    Bicicleta.removeById(req.params.id) 
    res.redirect('/bicicletas')
}

exports.bicicleta_update_get = function(req, res){
    let bici = Bicicleta.findById(req.params.id)
    res.render('bicicletas/update', {bici})
}

exports.bicicleta_update_post = function(req, res){
    let bici = Bicicleta.findById(req.body.id)
    bici.id = req.body.id
    bici.color = req.body.color
    bici.modelo = req.body.modelo
    bici.ubicacion = [req.body.lat, req.body.lon]

    res.redirect('/bicicletas')
}