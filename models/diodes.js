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
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

module.exports = mongoose.model('Capacitor', CapSchema);
