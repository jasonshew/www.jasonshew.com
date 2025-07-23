import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '/api'
});

// Example endpoints. Replace with your actual PHP/Express routes.
export const fetchCheckins = () => api.get('/checkins').then(r => r.data);
export const fetchLinkbook = () => api.get('/linkbook').then(r => r.data);
export const fetchTracks = () => api.get('/tracks').then(r => r.data);
export const fetchPersonality = () => api.get('/personality').then(r => r.data);
export const fetchUses = () => api.get('/uses').then(r => r.data);

// Generic hook helper for data fetching
export const fetcher = (fn) => fn().then(d => d);
