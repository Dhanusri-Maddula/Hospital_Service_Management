const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
  requestType: {
    type: String,
    required: true,
    enum: ['accident', 'medical', 'fire', 'other']
  },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  location: {
    type: {
      latitude: Number,
      longitude: Number,
      address: String
    },
    required: true
  },
  photo: {
    type: String // URL of uploaded photo
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'dispatched', 'in_transit', 'completed', 'cancelled'],
    default: 'pending'
  },
  ambulance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ambulance'
  },
  priority: {
    type: String,
    enum: ['critical', 'high', 'medium', 'low'],
    default: 'high'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('EmergencyRequest', emergencySchema);


