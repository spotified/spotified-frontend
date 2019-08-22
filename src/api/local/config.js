export const baseUrl = 'https://spotified.403.io/api/v1';

export const authorizationHeaders = {};

export const setLocalAuthorizationToken = token => {
  authorizationHeaders.headers = {
    Authorization: `Token ${token}`,
  };
};
