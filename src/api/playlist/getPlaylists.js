import { endpoints } from '../api';

export const getPlaylists = async () => {
  const response = await fetch(endpoints.playlists);
  return await response.json();
};
