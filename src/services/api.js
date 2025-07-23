import axios from 'axios';
const API_BASE = import.meta.env.VITE_API_BASE || 'hhttps://api.shewtopia.com/jshewblogapi/fetch';


const api = axios.create({ baseURL: API_BASE });

const normalize = (res, keyGuessList = ['data', 'rows', 'checkins']) => {
  // res is the full axios response: { data: ... }
  const payload = res.data;
  if (Array.isArray(payload)) return payload;
  for (const k of keyGuessList) {
    if (Array.isArray(payload?.[k])) return payload[k];
  }
  return []; // or throw an Error if you prefer
};

// Replace with your real endpoints:
export const fetchCheckins = () =>
  api.get('/fetch-checkins').then(r => normalize(r, ['data', 'rows', 'checkins']));
export const fetchLinkbook = () =>   api.get('/fetch-linkbook').then(r => normalize(r, ['data', 'rows', 'linkbook']));
export const fetchTracks = () =>   api.get('/fetch-tracks').then(r => normalize(r, ['data', 'rows', 'tracks']));

export const fetchPersonality = () => api.get('/personality').then(r => r.data);
export const fetchUses = () => api.get('/uses').then(r => r.data);
