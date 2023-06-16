const { chatroomModel } = require('../models/chatroom');

const getRoom = async (req, res) => {
  try {
    const chatrooms = await chatroomModel.find();
    res.status(200).json(chatrooms);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching chat rooms.' });
  }
};

const createRoom = async (req, res) => {
  try {
    const { title } = req.body;

    // Create a new chat room
    const newChatRoom = new chatroomModel({ title });

    // Save the chat room to the database
    await newChatRoom.save();

    res.status(200).json({ message: 'Chat room created successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the chat room.' });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const { roomId } = req.params;

    // Delete the chat room from the database
    await chatroomModel.findByIdAndDelete(roomId);

    res.status(200).json({ message: 'Chat room deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the chat room.' });
  }
};

const updateRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const { title } = req.body;

    // Update the chat room in the database
    await chatroomModel.findByIdAndUpdate(roomId, { title });

    res.status(200).json({ message: 'Chat room updated successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the chat room.' });
  }
};

module.exports = { getRoom, createRoom, deleteRoom, updateRoom };

