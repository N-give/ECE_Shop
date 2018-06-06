const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const IndSchema = new Schema(
    {
      value: {type: Number, required: true},
      tolerance: {type: Number, required: true},
      power: {type: Number, required: true},
      saturation_current: {type: Number, required: true},
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

module.exports = mongoose.model('IndSchema', IndSchema);
