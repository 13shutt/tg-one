const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true, },
    lastName: { type: String, required: true, },
    username: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    image: { type: String },
    chats: [{ type: mongoose.Types.ObjectId, ref: 'Chat' }],
    contacts: [{ type: mongoose.Types.ObjectId, ref: 'Contact' }],
}, {
    timestamps: true,
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);