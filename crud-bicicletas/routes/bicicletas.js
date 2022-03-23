let router = require('express').Router();
let BicicletaController = require('../controllers/bicicleta');
let BicicletaController2 = require('../controllers/BicicletaController');

//Listar las bicicletas
router.get('/', BicicletaController2.index);

//Añadir nueva bicicleta
router.get('/create', BicicletaController2.bicicleta_create_get)
router.post('/create', BicicletaController2.bicicleta_create_post)

//Eliminar bici
router.post('/:id/delete', BicicletaController2.bicicleta_delete_post)

//Update bici
router.get('/:id/update', BicicletaController2.bicicleta_update_get)
router.post('/:id/update', BicicletaController2.bicicleta_update_post)


module.exports = router;
