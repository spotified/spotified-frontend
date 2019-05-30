import { endpoints } from '../api';

export const getPlaylist = async id => {
  const response = await fetch(endpoints.playlist(id));
  return await response.json();
};
