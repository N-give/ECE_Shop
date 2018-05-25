const express = require('express'),
  router = express.Router();

const resistor_controller = require('../controllers/resistorController'),
  capacitor_controller = require('../controllers/capacitorController'),
  inductor_controller = require('../controllers/inductorController'),
  int_circ_controller = require('../controllers/int_circController');

// Catalog home page
router.get('/', resistor_controller.index);
//GET request for creating a resistor
router.get('/resistors/create', resistor_controller.resistor_create_get);
// POST request for creating a resistor
router.post('/resistors/create', resistor_controller.resistor_create_post);
// GET requiest for deleting a resistor
router.get('/resistors/delete', resistor_controller.resistor_delete_get);
// POST request to delete a resistor
router.post('/reistors/delete', resistor_controller.resistor_delete_post);
// GET request to update a resistor
router.get('/resistors/update', resistor_controller.resistor_update_get);
// POST request to update a resistor
router.post('/resistors/update', resistor_controller.resistor_update_post);
// GET request for one resistor
router.get('/resistors/:id', resistor_controller.resistor_detail);
//get request for list of all resistors
router.get('/resistors', resistor_controller.resistor_list);

// Catalog home page
router.get('/', capacitor_controller.index);
//GET request for creating a capacitor
router.get('/capacitors/create', capacitor_controller.capacitor_create_get);
// POST request for creating a capacitor
router.post('/capacitors/create', capacitor_controller.capacitor_create_post);
// GET requiest for deleting a capacitor
router.get('/capacitors/delete', capacitor_controller.capacitor_delete_get);
// POST request to delete a capacitor
router.post('/capacitors/delete', capacitor_controller.capacitor_delete_post);
// GET request to update a capacitor
router.get('/capacitors/update', capacitor_controller.capacitor_update_get);
// POST request to update a capacitor
router.post('/capacitors/update', capacitor_controller.capacitor_update_post);
// GET request for one capacitor
router.get('/capacitors/:id', capacitor_controller.capacitor_detail);
//get request for list of all capacitors
router.get('/capacitors', capacitor_controller.capacitor_list);

// Catalog home page
router.get('/', inductor_controller.index);
//GET request for creating a inductor
router.get('/inductors/create', inductor_controller.inductor_create_get);
// POST request for creating a inductor
router.post('/inductors/create', inductor_controller.inductor_create_post);
// GET requiest for deleting a inductor
router.get('/inductors/delete', inductor_controller.inductor_delete_get);
// POST request to delete a inductor
router.post('/inductors/delete', inductor_controller.inductor_delete_post);
// GET request to update a inductor
router.get('/inductors/update', inductor_controller.inductor_update_get);
// POST request to update a inductor
router.post('/inductors/update', inductor_controller.inductor_update_post);
// GET request for one inductor
router.get('/inductors/:id', inductor_controller.inductor_detail);
//get request for list of all inductors
router.get('/inductors', inductor_controller.inductor_list);

// Catalog home page
router.get('/', int_circ_controller.index);
//GET request for creating a int_circ
router.get('/int_circs/create', int_circ_controller.int_circ_create_get);
// POST request for creating a int_circ
router.post('/int_circs/create', int_circ_controller.int_circ_create_post);
// GET requiest for deleting a int_circ
router.get('/int_circs/delete', int_circ_controller.int_circ_delete_get);
// POST request to delete a int_circ
router.post('/int_circs/delete', int_circ_controller.int_circ_delete_post);
// GET request to update a int_circ
router.get('/int_circs/update', int_circ_controller.int_circ_update_get);
// POST request to update a int_circ
router.post('/int_circs/update', int_circ_controller.int_circ_update_post);
// GET request for one int_circ
router.get('/int_circs/:id', int_circ_controller.int_circ_detail);
//get request for list of all int_circs
router.get('/int_circs', int_circ_controller.int_circ_list);


// Export router
module.exports = router;
