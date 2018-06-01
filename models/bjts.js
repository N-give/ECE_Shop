const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const bjtsSchema = new Schema(
    {
      part: {type: String, retuired: true},
      doping: {type: String, enum: ['n-channel', 'p-channel'], required: true},
      beta: Number,
      max_currentCollector: Number,
      max_voltageCollector: Number,
      max_voltageBase: Number,
      power: {type: Number, required: true},
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

bjtsSchema
.virtual('url')
.get(function(){
  return 'catalog/bjt/' + this._id
});

module.exports = mongoose.model('bjtSchema', bjtsSchema);
