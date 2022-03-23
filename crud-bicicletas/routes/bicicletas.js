let router = require('express').Router();
let BicicletaController = require('../controllers/bicicleta');
let BicicletaController2 = require('../controllers/BicicletaController');

//Listar las bicicletas
router.get('/', BicicletaController2.homepage);

//Añadir nueva bicicleta
router.get('/create', BicicletaController.bicicleta_create_get)
router.post('/create', BicicletaController.bicicleta_create_post)

//Eliminar bici
router.post('/:id/delete', BicicletaController.bicicleta_delete_post)

//Update bici
router.get('/:id/update', BicicletaController.bicicleta_update_get)
router.post('/:id/update', BicicletaController.bicicleta_update_post)


module.exports = router;
