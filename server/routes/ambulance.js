const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

// GET all ambulance requests
router.get('/requests', auth, async (req, res) => {
  try {
    res.json({
      success: true,
      data: []
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ambulance requests' });
  }
});

module.exports = router;

