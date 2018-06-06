//import bluebird from '../node_modules/bluebird/js';
var Promise = require('bluebird');
const express = require('express'),
  router = express.Router(),
	models = require('../models');

var controller = Promise.promisifyAll(require('../controllers/controller.js'));


router.get('/:resource', function(req, res){
  var resource = req.params.resource;
	console.log(resource);

	//var promisifiedFindAll = Promise.promisify(controller.findAll);
	controller
		.findAllAsync(req.query, resource)
		.then(function(component){
			res.json({
				confirmation: 'Success',
				results: component
			});
		})
		.catch((err)=>{
			res.json({ confirmation: 'Fail' });
		});
	/*
  return Promise.promisify(controller.findAll(req.query, resource))
		.then(function(component){
			res.json({
				confirmation: 'Success',
				results: component
			});
		})
		.catch(function(err){
			console.log(err);
			res.json({
				confirmation: 'Fail'
			});
		})
	*/
});

router.get('/:resource/:id', function(req, res){
  var resource = req.params.resource;
  var id = req.params.id;
	console.log(resource);
	//var promisifiedFindById = Promise.promisify(controller.findById);
	controller
		.findByIdAsync(id, resource)
		.then(function(component){
			res.json({
				confiration: 'Success',
				results: component
			});
		})
		.catch(function(err){
			res.json({
				confirmation: 'Fail'
			});
		});
});

router.get('/:resource/', function(req, res){
  var resource = req.params.resource;
	console.log(resource);
	//var promisifiedFindMatch = Promise.promisify(controller.findMatch);
	controller
		.findMatchAsync(params.body, resource)
		.then(function(component){
			res.json({
				confirmation: 'Success',
				result: component
			});
		})
		.catch(function(err){
			console.log(err);
			res.json({ confirmation: 'Fail' });
		});
	/*
  return controller
		.findMatch(params.body, resource)
		.then(function(component){
			res.json({
				confirmation: 'Success',
				result: component
			});
		})
		.catch(function(err){
			console.log(err);
			res.json({ confirmation: 'Fail' });
		});
		*/
});

router.post('/:resource', function(req, res){
  var resource = req.params.resource;
	var model = models[resource];
	console.log(resource);
	//var promisifiedCreate = Promise.promisify(controller.create);
	controller
		.createAsync(req.body, resource)
		.then(function(component){
			res.json({
				confirmation: 'Success',
				result: component
			});
		})
		.catch(function(err){
			var errReturned = {};
			const keys = Object.keys(err.errors);
			for (var i=0; i<keys.length; i++) {
				errReturned[keys[i]] = model.schema.obj[keys[i]];
			}
			res.json({ 
				confirmation: 'Fail', 
				errReturned
			});
		});
	/*
  return controller
		.create(req.body, resource)
		.then(function(component){
			res.json({
				confirmation: 'Success',
				result: component
			});
		})
		.catch(function(err){
			var errReturned = {};
			const keys = Object.keys(err.errors);
			for (var i=0; i<keys.length; i++) {
				errReturned[keys[i]] = model.schema.obj[keys[i]];
			}
			res.json({ 
				confirmation: 'Fail', 
				errReturned
			});
		});
		*/
});

router.put('/:resource/:id', function(req, res){
  var resource = req.params.resource;
	console.log(resource);
	//var promisifiedUpdate = Promise.promisify(controller.update);
	controller
		.updateAsync(req.params.id, resource)
		.then(function(component){
			res.json({
				confirmation: 'Success',
				result: component
			});
		})
		.catch(function(err){
			console.log(err);
			res.json({ confirmation: 'Fail' });
		});
/*
  return controller
		.update(req.params.id, req.body, resource)
		.then(function(component){
			res.json({
				confirmation: 'Success',
				result: component
			});
		})
		.catch(function(err){
			console.log(err);
			res.json({ confirmation: 'Fail' });
		});
		*/
});

router.delete('/:resource/:id', function(req, res){
  var resource = req.params.resource;
	console.log(resource);
	//var promisifiedDelete = Promise.promisify(controller.remove);
	controller
		.removeAsync(req.params.id, resource)
		.then(function(){
			res.json({ confirmation: 'Success' });
		})
		.catch(function(err){
			console.log(err);
			res.json({ confirmation: 'Fail' });
		});

	/*
  return controller
		.remove(req.params.id, resource)
		.then(function(){
			res.json({ confirmation: 'Success' });
		})
		.catch(function(err){
			console.log(err);
			res.json({ confirmation: 'Fail' });
		});
		*/
});

module.exports = router;
