const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const switchSchema = new Schema(
    {
      use: {type: String, 
        enum: ['SPST', 'SPDT', 'DPST', 'DPDT', 'Pushbutton', 'Toggle', 'Float', 'Pressure']
      },
      current_rating: {type: Number, required: true},
      meta: {
        part_number: String,
        distributer: String,
        quantity: Number
      },
    }
  );

switchSchema
.virtual('url')
.get(function(){
  return 'catalog/switch/' + this._id
});

module.exports = mongoose.model('switch', switchSchema);
