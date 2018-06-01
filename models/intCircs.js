const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const intCircSchema = new Schema(
    {
      part: {type: String, required: true},
      category: {type: String, required: true},
      voltage: {type: Number, required: true},
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );


intCircSchema
.virtual('url')
.get(function(){
  return '/catalog/IntegratedCircuits/' + this._id;
});

module.exports = mongoose.model('intCircSchema', intCircSchema);
