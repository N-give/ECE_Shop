const capacitor = require('../models/capacitors.js');

module.exports = {
  find: function(params){
    return new Promise(function(resolve, reject){
      capacitor.find(params, function(err, capacitors){
        if(err){
          reject(err);
        } else {
          resolve(capacitors);
        }
      });
    });
  },

  findById: function(id){
    return new Promise(function(resolve, reject){
      capacitor.findById(id, function(err, capacitor){
        if(err){
          reject(err);
        } else {
          resolve(capacitor);
        }
      });
    });
  },

  create: function(params){
    return new Promise(function(resolve, reject){
      capacitor.create(params, function(err, capaitor){
        if(err){
          reject(err);
        } else {
          resolve(capacitor);
        }
      });
    });
  },

  update: function(){
  },

  remove: function(){
  }
}
