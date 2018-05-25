const Int_Circ = require('../models/int_circ.js');

// Displays index page
exports.index = function(req, res){
  res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.int_circ_list = function(req, res){
  res.send('NOT IMPLEMENTED: Integrated Circuit list');
};

// Display page for specific int_circ
exports.int_circ_detail = function(req, res){
  res.send('NOT IMPLEMENTED: int_circ detail: ' + req.params.id);
};

// Display int_circ create form on GET
exports.int_circ_create_get = function(req, res){
  res.send('NOT IMPLEMENTED: int_circ create GET');
};

// Handle int_circ create on POST
exports.int_circ_create_post = function(req, res){
  res.send('NOT IMPLEMENTED: int_circ create POST');
};

//Display int_circ delete form on GET
exports.int_circ_delete_get = function(req, res){
  res.send('NOT IMPLEMENTED: int_circ delete GET');
};

// Handle int_circ delete on POST
exports.int_circ_delete_post = function(req, res){
  res.send('NOT IMPLEMENTED: int_circ delete POST');
};

//Display int_circ update form on GET
exports.int_circ_update_get = function(req, res){
  res.send('NOT IMPLEMENTED: int_circ update GET');
};

// Handle int_circ update on POST
exports.int_circ_update_post = function(req, res){
  res.send('NOT IMPLEMENTED: int_circ update POST');
};
