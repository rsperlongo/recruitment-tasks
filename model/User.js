const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: String,
    email: String,
    givenName: String,
    familyName: String,
    created: String,
});

module.exports = mongoose.model('User', UserSchema);