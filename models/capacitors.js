const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CapSchema = new Schema(
    {
      value: {type: Number, required: true},
      description: {type: String, enum: ['Ceramic', 'Electrolytic', 'Tantalum', 'Polycarbonate', 'Polyexter', 'Silver mica']},
      connect: {type: String, required: true, enum: ['Surface mount', 'Through hole']}
    }
  );

CapSchema
.virtual('url')
.get(function(){
  return 'catalog/capacitor/' + this._id
});

module.exports = mongoose.model('Capacitor', CapSchema);
