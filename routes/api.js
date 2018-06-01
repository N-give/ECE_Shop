const express = require('express'),
  router = express.Router();
var controller = require('../controllers/test.js');


router.get('/:resource', function(req, res, next){
  var resource = req.params.resource;

  var promise = controller.find(req.query, resource);
  promise.then(function(component){
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
  });
});

router.get('/:resource/:id', function(req, res, next){
  var resource = req.params.resource;
  var id = req.params.id;

  var promise = controller.findById(id, resource);
  promise.then(function(component){
    res.json({
      confirmation: 'Success',
      result: component
    });
  })
  .catch(function(err){
    console.log(err);
    res.json({ confirmation: 'Fail' });
  });
});

router.post('/:resource', function(req, res, next){
  var resource = req.params.resource;

  var promise = controller.create(req.body, resource);
  promise.then(function(component){
    res.json({
      confirmation: 'Success',
      result: component
    });
  })
  .catch(function(err){
    console.log(err);
    res.json({ confirmation: 'Fail' });
  });
});

router.put('/:resource/:id', function(req, res, next){
  var resource = req.params.resource;

  var promise = controller.update(req.params.id, req.body, resource);
  promise.then(function(component){
    res.json({
      confirmation: 'Success',
      result: component
    });
  })
  .catch(function(err){
    console.log(err);
    res.json({ confirmation: 'Fail' });
  });
});

router.delete('/:resource/:id', function(req, res, next){
  var resource = req.params.resource;

  var promise = controller.remove(req.params.id, resource);
  promise.then(function(){
    res.json({ confirmation: 'Success' });
  })
  .catch(function(err){
    console.log(err);
    res.json({ confirmation: 'Fail' });
  });
});

module.exports = router;
