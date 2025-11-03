import React, { useState, useRef } from 'react';
import { emergencyAPI } from '../utils/api';
import socket from '../utils/socket';
import './EmergencyUpload.css';

function EmergencyUpload({ onClose }) {
  const [formData, setFormData] = useState({
    requestType: 'accident',
    description: '',
    address: '',
  });
  const [location, setLocation] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);

  // Get GPS location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          alert('📍 Location captured successfully!');
        },
        (error) => {
          alert('❌ Could not get location. Please enable GPS.');
        }
      );
    } else {
      alert('❌ Geolocation not supported by your browser.');
    }
  };

  // Handle photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('❌ File size must be less than 10MB');
        return;
      }
      setPhoto(file);
    }
  };

  // Submit emergency request
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!location) {
      alert('❌ Please capture your location first!');
      return;
    }

    setUploading(true);

    try {
      const submitData = new FormData();
      submitData.append('requestType', formData.requestType);
      submitData.append('description', formData.description);
      submitData.append('latitude', location.latitude);
      submitData.append('longitude', location.longitude);
      submitData.append('address', formData.address || 'Auto-detected location');
      
      if (photo) {
        submitData.append('photo', photo);
      }

      const response = await emergencyAPI.createRequest(submitData);
      
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting emergency request:', error);
      alert('❌ Failed to submit emergency request. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="emergency-upload-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2>🚨 Emergency Request</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="emergency-form">
          {/* Request Type */}
          <div className="form-group">
            <label>Emergency Type</label>
            <select
              value={formData.requestType}
              onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
              required
            >
              <option value="accident">🚑 Accident</option>
              <option value="medical">⚠️ Medical Emergency</option>
              <option value="fire">🔥 Fire</option>
              <option value="other">❗ Other</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="3"
              placeholder="Describe the emergency..."
              required
            />
          </div>

          {/* Location */}
          <div className="form-group">
            <label>Location</label>
            <div className="location-controls">
              <button
                type="button"
                onClick={getLocation}
                className="btn-location"
                disabled={!navigator.geolocation}
              >
                📍 {location ? 'Location Captured ✓' : 'Get GPS Location'}
              </button>
              {location && (
                <span className="location-display">
                  Lat: {location.latitude.toFixed(6)}, Lon: {location.longitude.toFixed(6)}
                </span>
              )}
            </div>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Address (optional)"
            />
          </div>

          {/* Photo Upload */}
          <div className="form-group">
            <label>Upload Photo (Optional)</label>
            <div className="photo-upload">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: 'none' }}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="btn-upload"
              >
                📷 {photo ? photo.name : 'Choose Photo'}
              </button>
              {photo && (
                <button
                  type="button"
                  onClick={() => setPhoto(null)}
                  className="btn-remove"
                >
                  Remove
                </button>
              )}
            </div>
            {photo && (
              <div className="photo-preview">
                <img src={URL.createObjectURL(photo)} alt="Preview" />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="button"
              onClick={onClose}
              className="btn-cancel"
              disabled={uploading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-submit"
              disabled={uploading || !location}
            >
              {uploading ? '⏳ Sending...' : success ? '✓ Sent!' : '🚨 Send Emergency Request'}
            </button>
          </div>

          {success && (
            <div className="success-message">
              ✓ Emergency request sent successfully! Help is on the way.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default EmergencyUpload;


