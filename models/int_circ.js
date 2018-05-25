const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const ICSchema = new Schema(
    {
      part_number: {type: String, required: true},
      description: {type: String, max: 100},
      keyword: {type: String, required: true},
      datasheet: {type: String}
    }
  );

ICSchema
.virtual('url')
.get(function(){
  return '/catalog/ic/' + this._id;
});

module.exports = mongoose.model('IC', ICSchema);
