var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//import counter increament method
const autoIncrementModelID = require('./Counter.js');

//ticket model
const ticketSchema = new Schema({
  id: { type: Number, unique: true, min: 1 }, //User will access particular ticket using its unique id attribute
  answers:Array
});

//auto increasing id attribute with generating new ticket

ticketSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelID('tickets', this, next);  //incrementing id attribute before saving ticket
});

module.exports = mongoose.model('tickets', ticketSchema);