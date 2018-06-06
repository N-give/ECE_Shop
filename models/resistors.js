const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ResistorSchema = new Schema(
	{
		value: {type: Number, required: true},
		tolerance: {type: Number, default: 1},
		power: {type: Number, required: true},
		package: {type: String, required: true},
	  location: {type: String, required: true},
		meta: {
			part_number: String,
			distributer: String,
			quantity: Number
		},
	}
);

module.exports = mongoose.model('ResistorSchema', ResistorSchema);
