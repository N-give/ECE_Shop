const express = require('express'),
  router = express.Router(),
  capacitorController = require('../controllers/capacitorController.js');

router.get('/:resource', function(req, res, next){
  var resource = req.params.resource;
  if(resource == 'capacitor'){
    capacitorController.find(req.query, function(err, results){
      if(err){
        res.json({
          confirmation: 'Fail',
          message: err
        });
        return;
      }

      res.json({
        confirmation: 'Success',
        results: results
      });
    });
  }
});

router.get('/:resource/:id', function(req, res, next){
  var resource = req.params.resource;
  var id = req.params.id;

  if(resource == 'capacitor'){
    capacitorController.findById(id, function(err, result){
      if(err){
        res.json({
          confirmation: 'Fail',
          message: 'Not Found'
        });
        return;
      }

      res.json({
        confirmation: 'Success',
        result: result
      });
    });
  }
});

router.post('/:resource', function(req, res, next){
  console.log(req.params);
  var resource = req.params.resource;
  if(resource == 'capacitor'){
    capacitorController.create(req.params, function(err, result){
      if(err){
        res.json({
          confirmation: 'Fail',
          message: err
        });
        return;
      }

      res.json({
        confirmation: 'Success',
        result: result
      });
    });
  }
});

module.exports = router;
