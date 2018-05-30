const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ResistorSchema = new Schema(
    {
      value: {type: Number, required: true},
      tolerance: {type: Number, required: true},
      power: {type: Number, required: true},
      pack: {type: Number, required: true},
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

ResistorSchema
.virtual('url')
.get(function(){
  return '/catalog/resistor/' + this._id;
});

module.exports = mongoose.model('ResistorSchema', ResistorSchema);
