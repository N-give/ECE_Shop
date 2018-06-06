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

module.exports = mongoose.model('switch', switchSchema);
