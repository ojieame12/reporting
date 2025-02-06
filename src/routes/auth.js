// src/routes/auth.js
const express = require('express');
const router = express.Router();

// Login endpoint
router.post('/login', (req, res) => {
  // Implement login logic here
  res.json({ token: 'dummy_token' });
});

module.exports = router;
