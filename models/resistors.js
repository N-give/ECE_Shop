const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const ResistorSchema = new Schema(
    {
      value: {type: Number, required: true},
      tolerance: {type: Number, required: true},
      range: {type: Number},
      connect: {type: String, required: true, enum: ['Surface mount', 'Through hole', 'Power']}
    }
  );

ResistorSchema
.virtual('resistor')
.get(function(){
  return this.value + ' Ohms \xB1 ' + this.tolerance;
});

ResistorSchema
.virtual('url')
.get(function(){
  return '/catalog/resistor/' + this._id;
});

module.exports = mongoose.model('Resistor', ResistorSchema);
