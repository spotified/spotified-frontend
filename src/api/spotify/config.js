export const baseUrl = 'https://api.spotify.com/v1';

export const authorizationHeaders = {};

export const setSpotifyAuthorizationToken = token => {
  authorizationHeaders.headers = {
    Authorization: `Bearer ${token}`,
  };
};
