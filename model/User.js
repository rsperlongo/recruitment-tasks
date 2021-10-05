const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
      type: String,
    },
    givenName: {
      type: String,
    },
    familyName: {
      type: String
    },
    createAt: {
      type: Date,
      default: Date.now
    }    
  });

const User = mongoose.model('User', UserSchema);

module.exports = User;