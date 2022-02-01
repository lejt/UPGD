const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    create
};

async function create(req, res) {
  try {
    // Add the user to the DB
    const user = await User.create(req.body);

    // Create a token using 'user' obj
    // Token will be a string!
    const token = createJWT(user);
    // Response to request with JSON of token
    res.json(token);

  } catch(err) {
    res.status(400).json(err);
  }
}

// Helper Functions
function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}