const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    image: { type: String },
    chats: [{ type: mongoose.Types.ObjectId, ref: 'Chats' }],
    contacts: [{ type: mongoose.Types.ObjectId, ref: 'Contacts'}]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);