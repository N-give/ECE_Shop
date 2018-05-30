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

linRegSchema
.virtual('url')
.get(function(){
  return '/catalog/LinearRegulators/' + this._id;
});

module.exports = mongoose.model('linRegSchema', linRegSchema);
