const capacitor = require('../models/capacitors.js');

module.exports = {
  find: function(params, callback){
    capacitor.find(params, function(err, capacitors){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, capacitors);
    });
  },

  findById: function(id, callback){
    capacitor.findById(id, function(err, capacitor){
      if(err){
        callback(err,null);
        return;
      }

      callback(null, capacitor);
    });
  },

  create: function(params, callback){
    capacitor.create(params, function(err, capaitor){
      if(err){
        callback(err, null);
        return;
      }

      return callback(null, capacitor);
    });
  },

  update: function(){
  },

  remove: function(){
  }
}
