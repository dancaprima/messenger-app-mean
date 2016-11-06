var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: { type : String , required: true },// dalam satu message user punya content
    user: { type: Schema.Types.ObjectId, ref : 'User' }
});


module.exports = mongoose.model('Message', schema);