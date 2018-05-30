const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CapSchema = new Schema(
    {
      value: {type: Number, required: true},
      tolerance: {type: Number, required: true},
      voltage_rating: {type: Number, required: true},
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

CapSchema
.virtual('url')
.get(function(){
  return 'api/capacitor/' + this._id
});

module.exports = mongoose.model('CapSchema', CapSchema);
