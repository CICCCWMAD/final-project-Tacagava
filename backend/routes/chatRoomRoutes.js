const express = require('express');
const router = express.Router();

const {
  getRoom,
  createRoom,
  deleteRoom,
  updateRoom,
} = require('../controllers/chatRoomController');

router.route('/').get(getRoom);
router.route('/create').post(createRoom);
router.route('/delete/:roomId').delete(deleteRoom);
router.route('/update/:roomId').put(updateRoom);

module.exports = router;
