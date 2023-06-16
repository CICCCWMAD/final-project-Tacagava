const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.', '.env') });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

const authenticationRoute = require('./routes/authenticationRoutes');
const chatRoomRoute = require('./routes/chatRoomRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB Atlas
mongoose
  .connect('mongodb+srv://tatygarcia833:<PJfKdcLsFIprDkWm>@cluster0.qxg0zn7.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Failed to connect to MongoDB Atlas:', error));

app.use('/api/auth', authenticationRoute);
app.use('/api/chatrooms', chatRoomRoute);

app.listen(port, () => {
  console.log('Server is running');
});



