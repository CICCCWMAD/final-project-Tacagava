const users = require('../models/users');
const { hashPassword } = require('../helpers/userHelper');

const registerUser = async (req, res) => {
  try {
    // Extract user data from the request body
    const { name, address, phone, username, password } = req.body;

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const newUser = new users.usersModel({
      name,
      address,
      phone,
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the user.' });
  }
};

const loginUser = async (req, res) => {
  try {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Find the user by username
    const user = await users.usersModel.findOne({ username });

    // If the user does not exist or the password is incorrect
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Return a success message or token for authentication
    res.status(200).json({ message: 'Login successful.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while logging in.' });
  }
};

module.exports = { registerUser, loginUser };
