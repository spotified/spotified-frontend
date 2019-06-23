export const baseUrl = 'https://api.spotify.com/v1';

export const authorizationHeaders = {};

export const setAuthorizationHeaderToken = token => {
  authorizationHeaders.headers = {
    Authorization: `Bearer ${token}`,
  };
};
