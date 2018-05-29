const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CapSchema = new Schema(
    {
      part: {type: String, required: true},
      //Type ?
      volt_drop: {type: Number, required: true},
      volt_break: {type: Number, required: true},
      max_current: {type: Number, required: true},
      power: Number,
      meta: {
        part-number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

CapSchema
.virtual('url')
.get(function(){
  return 'catalog/capacitor/' + this._id
});

module.exports = mongoose.model('Capacitor', CapSchema);
