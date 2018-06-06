const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const bjtsSchema = new Schema(
    {
      part_number: {type: String, required: true},
      doping: {type: String, enum: ['NPN', 'PNP'], required: true},
      beta: Number,
      max_ic: Number,
      max_vce: Number,
      max_vbe: Number,
      power: {type: Number, required: true},
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

module.exports = mongoose.model('bjtSchema', bjtsSchema);
