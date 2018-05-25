const Inductor = require('../models/inductors.js');

// Displays index page
exports.index = function(req, res){
  res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.inductor_list = function(req, res){
  res.send('NOT IMPLEMENTED: Inductor list');
};

// Display page for specific inductor
exports.inductor_detail = function(req, res){
  res.send('NOT IMPLEMENTED: inductor detail: ' + req.params.id);
};

// Display inductor create form on GET
exports.inductor_create_get = function(req, res){
  res.send('NOT IMPLEMENTED: inductor create GET');
};

// Handle inductor create on POST
exports.inductor_create_post = function(req, res){
  res.send('NOT IMPLEMENTED: inductor create POST');
};

//Display inductor delete form on GET
exports.inductor_delete_get = function(req, res){
  res.send('NOT IMPLEMENTED: inductor delete GET');
};

// Handle inductor delete on POST
exports.inductor_delete_post = function(req, res){
  res.send('NOT IMPLEMENTED: inductor delete POST');
};

//Display inductor update form on GET
exports.inductor_update_get = function(req, res){
  res.send('NOT IMPLEMENTED: inductor update GET');
};

// Handle inductor update on POST
exports.inductor_update_post = function(req, res){
  res.send('NOT IMPLEMENTED: inductor update POST');
};
