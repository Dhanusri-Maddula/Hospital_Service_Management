import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth endpoints
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getCurrentUser: () => api.get('/auth/me'),
};

// Emergency endpoints
export const emergencyAPI = {
  createRequest: (formData) => {
    const token = localStorage.getItem('token');
    return axios.post(`${API_URL}/emergency/request`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  getRequests: () => api.get('/emergency/requests'),
  getRequest: (id) => api.get(`/emergency/requests/${id}`),
  updateRequest: (id, data) => api.put(`/emergency/requests/${id}`, data),
};

// Alert endpoints
export const alertAPI = {
  broadcast: (data) => api.post('/alerts/broadcast', data),
  getAlerts: () => api.get('/alerts'),
};

// Notification endpoints
export const notificationAPI = {
  getAll: () => api.get('/notifications'),
  getUnreadCount: () => api.get('/notifications/unread-count'),
  markAsRead: (id) => api.put(`/notifications/${id}/read`),
  markAllAsRead: () => api.put('/notifications/mark-all-read'),
};

// Ambulance endpoints
export const ambulanceAPI = {
  getRequests: () => api.get('/ambulance/requests'),
};

// Equipment endpoints
export const equipmentAPI = {
  getAll: () => api.get('/equipment'),
};

export default api;


