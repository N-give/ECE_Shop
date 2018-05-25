const Capacitor = require('../models/capacitors.js');

// Displays index page
exports.index = function(req, res){
  res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display Capacitor list
exports.capacitor_list = function(req, res){
  res.send('NOT IMPLEMENTED: Capacitor list');
};

// Display page for specific capacitor
exports.capacitor_detail = function(req, res){
  res.send('NOT IMPLEMENTED: capacitor detail: ' + req.params.id);
};

// Display capacitor create form on GET
exports.capacitor_create_get = function(req, res){
  res.send('NOT IMPLEMENTED: capacitor create GET');
};

// Handle capacitor create on POST
exports.capacitor_create_post = function(req, res){
  res.send('NOT IMPLEMENTED: capacitor create POST');
};

//Display capacitor delete form on GET
exports.capacitor_delete_get = function(req, res){
  res.send('NOT IMPLEMENTED: capacitor delete GET');
};

// Handle capacitor delete on POST
exports.capacitor_delete_post = function(req, res){
  res.send('NOT IMPLEMENTED: capacitor delete POST');
};

//Display capacitor update form on GET
exports.capacitor_update_get = function(req, res){
  res.send('NOT IMPLEMENTED: capacitor update GET');
};

// Handle capacitor update on POST
exports.capacitor_update_post = function(req, res){
  res.send('NOT IMPLEMENTED: capacitor update POST');
};
