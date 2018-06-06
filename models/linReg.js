const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const linRegSchema = new Schema(
    {
      part: {type: String, required: true},
      category: {type: String, enum: ['fixed', 'adjustable'], required: true},
      vOutMax: Number,
      vDropout: Number,
      power: Number,
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

module.exports = mongoose.model('linRegSchema', linRegSchema);
