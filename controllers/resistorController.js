const Resistor = require('../models/resistors.js');

// Displays index page
exports.index = function(req, res){
  res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display page for list of resistors
exports.resistor_list = function(req, res){
  res.send('NOT IMPLEMENTED: Resistor list');
};

// Display page for specific resistor
exports.resistor_detail = function(req, res){
  res.send('NOT IMPLEMENTED: resistor detail: ' + req.params.id);
};

// Display resistor create form on GET
exports.resistor_create_get= function(req, res){
  res.send('NOT IMPLEMENTED: resistor create GET');
};

// Handle resistor create on POST
exports.resistor_create_post = function(req, res){
  res.send('NOT IMPLEMENTED: resistor create POST');
};

//Display resistor delete form on GET
exports.resistor_delete_get = function(req, res){
  res.send('NOT IMPLEMENTED: resistor delete GET');
};

// Handle resistor delete on POST
exports.resistor_delete_post = function(req, res){
  res.send('NOT IMPLEMENTED: resistor delete POST');
};

//Display resistor update form on GET
exports.resistor_update_get = function(req, res){
  res.send('NOT IMPLEMENTED: resistor update GET');
};

// Handle resistor update on POST
exports.resistor_update_post = function(req, res){
  res.send('NOT IMPLEMENTED: resistor update POST');
};
