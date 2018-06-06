const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const mosfetSchema = new Schema(
    {
      part: {type: String, retuired: true},
      doping: {type: String, enum: ['n-channel', 'p-channel'], required: true},
      conductance: String,
      max_ic: Number,
      max_vd: Number,
      max_vg: Number,
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

module.exports = mongoose.model('mosfetSchema', mosfetSchema);
