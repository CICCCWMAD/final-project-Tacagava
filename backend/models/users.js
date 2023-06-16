const mongoose = require('mongoose');
const { genSalt, hash, compare } = require('bcrypt');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Method to compare passwords
usersSchema.methods.comparePassword = function (password) {
  return compare(password, this.password);
};

module.exports = {
  usersModel: mongoose.model('users', usersSchema),
};
