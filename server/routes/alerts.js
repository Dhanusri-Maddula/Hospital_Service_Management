const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

// POST broadcast alert
router.post('/broadcast', auth, async (req, res) => {
  try {
    const { type, location, severity, message } = req.body;

    const alert = {
      type,
      location,
      severity,
      message,
      timestamp: new Date()
    };

    // Emit real-time alert
    const io = req.app.get('io');
    if (io) {
      io.emit('broadcast-alert', alert);
    }

    res.json({
      success: true,
      message: 'Alert broadcasted',
      data: alert
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to broadcast alert' });
  }
});

// GET all alerts
router.get('/', auth, async (req, res) => {
  try {
    res.json({
      success: true,
      data: []
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch alerts' });
  }
});

module.exports = router;

