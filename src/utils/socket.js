import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket', 'polling'],
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 5,
});

socket.on('connect', () => {
  console.log('✅ Connected to backend server');
});

socket.on('disconnect', () => {
  console.log('❌ Disconnected from server');
});

socket.on('emergency-request-created', (data) => {
  console.log('🚨 Emergency request:', data);
  // Dispatch custom event for React components to listen
  window.dispatchEvent(new CustomEvent('emergency-alert', { detail: data }));
});

socket.on('broadcast-alert', (data) => {
  console.log('📢 Alert broadcast:', data);
  window.dispatchEvent(new CustomEvent('alert-broadcast', { detail: data }));
});

socket.on('ambulance-request', (data) => {
  console.log('🚑 Ambulance request:', data);
  window.dispatchEvent(new CustomEvent('ambulance-request', { detail: data }));
});

export default socket;


