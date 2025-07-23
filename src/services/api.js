import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'https://api.shewtopia.com/jshewblogapi/fetch'
});

// Replace with your real endpoints:
export const fetchCheckins = () => api.get('/fetch-checkins').then(r => r.data);
export const fetchLinkbook = () => api.get('/fetch-linkbook').then(r => r.data);
export const fetchTracks = () => api.get('/fetch-tracks').then(r => r.data);
export const fetchPersonality = () => api.get('/personality').then(r => r.data);
export const fetchUses = () => api.get('/uses').then(r => r.data);
