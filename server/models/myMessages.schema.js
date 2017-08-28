var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messages = new Schema({
    message: { type: String, required: true, unique: true},
},
{ collections: 'messageBoard' }
);

module.exports = mongoose.model('messages', messages);
// Exporting files to be used by a collection