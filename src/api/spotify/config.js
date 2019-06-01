export const baseUrl = 'https://api.spotify.com/v1';

export const authorizationHeaders = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
