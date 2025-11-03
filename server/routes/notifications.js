const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');
const { auth } = require('../middleware/auth');

// GET all notifications
router.get('/', auth, async (req, res) => {
  try {
    const notifications = await Notification.find({
      $or: [
        { userId: req.user.id },
        { role: req.user.role },
        { broadcast: true }
      ]
    })
    .sort({ createdAt: -1 })
    .limit(100);

    res.json({
      success: true,
      data: notifications
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// GET unread count
router.get('/unread-count', auth, async (req, res) => {
  try {
    const count = await Notification.countDocuments({
      userId: req.user.id,
      read: false
    });

    res.json({
      success: true,
      data: { count }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get unread count' });
  }
});

// PUT mark as read
router.put('/:id/read', auth, async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    res.json({
      success: true,
      data: notification
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark as read' });
  }
});

// PUT mark all as read
router.put('/mark-all-read', auth, async (req, res) => {
  try {
    await Notification.updateMany(
      { userId: req.user.id, read: false },
      { read: true }
    );

    res.json({
      success: true,
      message: 'All notifications marked as read'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark all as read' });
  }
});

module.exports = router;

