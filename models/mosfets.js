const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const mosfetSchema = new Schema(
    {
      part: {type: String, retuired: true},
      doping: {type: String, enum: ['n-channel', 'p-channel'], required: true},
      conductance: String,
      max_currentDrain: Number,
      max_voltageDrain: Number,
      max_voltageGate: Number,
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

mosfetSchema
.virtual('url')
.get(function(){
  return 'catalog/mosfet/' + this._id
});

module.exports = mongoose.model('mosfetSchema', mosfetSchema);
