const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    messages: [{type: mongoose.Types.ObjectId, ref: 'Message'}],
    members: [{ type: mongoose.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Chat', chatSchema);