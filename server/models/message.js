const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    author: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    msg: { type: String, required: true },
    date: { type: Date }
});

module.exports = mongoose.model('Message', messageSchema);