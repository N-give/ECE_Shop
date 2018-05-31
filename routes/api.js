const express = require('express'),
  router = express.Router();
var controllers = require('../controllers');


router.get('/:resource', function(req, res, next){
  var resource = req.params.resource;
  var controller = controllers[resource];

  var promise = controller.find(req.query);
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
  var controller = controllers[resource];

  var promise = controller.findById(id);
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
  var controller = controllers[resource];

    var promise = controller.create(req.body);
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

module.exports = router;
