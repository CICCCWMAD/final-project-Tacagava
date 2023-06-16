const { genSalt, hash } = require('bcrypt');

// Function for hashing the password
const hashPassword = async (password) => {
  const saltRounds = 10;
  const salt = await genSalt(saltRounds);
  return hash(password, salt);
};

module.exports = { hashPassword };
