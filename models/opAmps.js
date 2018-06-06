const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const opAmpSchema = new Schema(
    {
      part: {type: String, required: true},
      gain_bandwidth: {type: Number, required: true},
      slew: Number,
      sided: {type: String, enum: ['Dual', 'Single', 'Both']},
      max_current: {type: Number, required: true},
      max_overhead: {type: Number, required: true},
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

module.exports = mongoose.model('opAmpSchema', opAmpSchema);
