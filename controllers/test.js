module.exports = {
  find: function(params, resource){
    return new Promise(function(resolve, reject){
      const models = require('../models');
      const comps = models[resource];
      comps.find(params, function(err, comps){
        if(err){
          reject(err);
        } else {
          resolve(comps);
        }
      });
    });
  },

  findById: function(id, resource){
    return new Promise(function(resolve, reject){
      const models = require('../models');
      const comps = models[resource];
      comps.findById(id, function(err, comp){
        if(err){
          reject(err);
        } else {
          resolve(comp);
        }
      });
    });
  },

  create: function(params, resource){
    return new Promise(function(resolve, reject){
      const models = require('../models');
      const comps = models[resource];
      var comp = new comps(params);
      comp.save(function(err, comp){
        if(err){
          reject(err);
        } else {
          resolve(comp);
        }
      });
    });
  },

  update: function(id, params, resource){
    return new Promise(function(resolve, reject){
      const models = require('../models');
      const comps = models[resource];
      comps.findByIdAndUpdate(id, params, {new:true}, function(err, comp){
        if(err){
          reject(err);
        } else {
          resolve(comp);
        }
      });
    });
  },

  remove: function(id, resource){
    return new Promise(function(resolve, reject){
      const models = require('../models');
      const comps = models[resource];
      comps.findByIdAndRemove(id, function(err){
        if(err){
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
