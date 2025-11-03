const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

// GET all equipment
router.get('/', auth, async (req, res) => {
  try {
    res.json({
      success: true,
      data: []
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch equipment' });
  }
});

module.exports = router;

