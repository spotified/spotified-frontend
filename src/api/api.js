const baseUrl = 'https://spotified.403.io/api/v1';

export const endpoints = {
  authStart: `${baseUrl}/auth/start/`,
  authFinish: `${baseUrl}/auth/finish/`,
  playlists: `${baseUrl}/playlists/`,
  playlist: id => `${baseUrl}/playlists/${id}/`,
};
