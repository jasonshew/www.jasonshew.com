import axios from 'axios';
const API_BASE = import.meta.env.VITE_API_BASE || 'https://api.shewtopia.com/jshewblogapi/fetch';


const api = axios.create({ baseURL: API_BASE });


export const fetchCheckins = async () => {
  const res = await api.get('/fetch-checkins');       
  const payload = res.data;
  // Ensure we always return an array
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.checkins)) return payload.checkins;
  return []; // fallback
};
export const fetchLinkbook = () =>   api.get('/fetch-linkbook').then(r => normalize(r, ['data', 'rows', 'linkbook']));
export const fetchTracks = () =>   api.get('/fetch-tracks').then(r => normalize(r, ['data', 'rows', 'tracks']));

export const fetchPersonality = () => api.get('/personality').then(r => r.data);
export const fetchUses = () => api.get('/uses').then(r => r.data);
