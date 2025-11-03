const express = require('express');
const router = express.Router();
const multer = require('multer');
const EmergencyRequest = require('../models/EmergencyRequest');
const { auth } = require('../middleware/auth');

// Configure multer for photo uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/emergency/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB max
});

// POST - Create emergency request with photo and location
router.post('/request', auth, upload.single('photo'), async (req, res) => {
  try {
    const { latitude, longitude, address, requestType, description } = req.body;
    
    if (!latitude || !longitude) {
      return res.status(400).json({ 
        error: 'Location coordinates are required' 
      });
    }

    const emergencyRequest = new EmergencyRequest({
      requestType: requestType || 'accident',
      reportedBy: req.user.id,
      location: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        address: address || 'Address not provided'
      },
      photo: req.file ? `/uploads/emergency/${req.file.filename}` : null,
      description: description || 'Emergency assistance required'
    });

    await emergencyRequest.save();

    // Emit real-time notification
    const io = req.app.get('io');
    if (io) {
      io.emit('emergency-request-created', emergencyRequest);
    }

    res.status(201).json({
      success: true,
      message: 'Emergency request created successfully',
      data: emergencyRequest
    });
  } catch (error) {
    console.error('Emergency request error:', error);
    res.status(500).json({ error: 'Failed to create emergency request' });
  }
});

// GET - Get all emergency requests
router.get('/requests', auth, async (req, res) => {
  try {
    const requests = await EmergencyRequest.find()
      .populate('reportedBy', 'name email')
      .sort({ createdAt: -1 })
      .limit(100);

    res.json({
      success: true,
      data: requests
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch emergency requests' });
  }
});

// GET - Get single emergency request
router.get('/requests/:id', auth, async (req, res) => {
  try {
    const request = await EmergencyRequest.findById(req.params.id)
      .populate('reportedBy', 'name email phone')
      .populate('ambulance');

    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    res.json({
      success: true,
      data: request
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch emergency request' });
  }
});

// PUT - Update emergency request status
router.put('/requests/:id', auth, async (req, res) => {
  try {
    const { status, ambulance } = req.body;

    const updateData = {};
    if (status) updateData.status = status;
    if (ambulance) updateData.ambulance = ambulance;

    const request = await EmergencyRequest.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    // Emit real-time update
    const io = req.app.get('io');
    if (io) {
      io.emit('emergency-request-updated', request);
    }

    res.json({
      success: true,
      message: 'Emergency request updated',
      data: request
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update emergency request' });
  }
});

module.exports = router;

