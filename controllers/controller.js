module.exports = {
  findAll: function(params, resource, callback){
		const models = require('../models');
		const comps = models[resource];
		console.log(params);
		comps.find(params, function(err, component){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, component);
		});
  },

  findById: function(id, resource, callback){
		const models = require('../models');
		const comps = models[resource];
		comps.findById(id, function(err, comp){
			if(err){
				callback(err, null);
				return;
			} 
			callback(null, comp);
		});
  },

  findMatch: function(params, resource, callback){
		const models = require('../models');
		const comps = models[resource];
		console.log(params);
		comps.find(params, function(err, comps){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, comps);
		});
  },

  create: function(params, resource, callback){
		const models = require('../models');
		const comps = models[resource];
		var comp = new comps(params);
		comp.save(function(err, comp){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, comp);
		});
  },

  update: function(id, params, resource, callback){
		const models = require('../models');
		const comps = models[resource];
		comps.findByIdAndUpdate(id, params, {new:true}, function(err, comp){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, comp);
		});
		/*
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
		*/
  },

  remove: function(id, resource, callback){
		const models = require('../models');
		const comps = models[resource];
		comps.findByIdAndRemove(id, function(err){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, null);
		});
  }
}
