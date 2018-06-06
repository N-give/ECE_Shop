const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CapSchema = new Schema(
    {
      value: {type: Number, required: true},
      tolerance: {type: Number, required: true},
      voltage_rating: {type: Number, required: true},
			package: {type: String, required: true},
			location: {type: String, required: true},
			material: {type: String, required: true},
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );


module.exports = mongoose.model('CapSchema', CapSchema);
