const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = {
  chatroomModel: mongoose.model('chatroom', chatroomSchema),
};
