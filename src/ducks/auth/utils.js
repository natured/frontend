// stores token on axios headers and in local storage
const storeToken = (token, api) => {
  api.defaults.headers.common['Authorization'] = `bearer ${token}`; // eslint-disable-line
  window.localStorage.setItem('token', token);
  return api;
};

// removes token from axios headers and from local storage
const removeToken = (api) => {
  api.defaults.headers.common['Authorization'] = null;  // eslint-disable-line
  delete api.defaults.headers.common['Authorization'];  // eslint-disable-line
  window.localStorage.removeItem('token');
  return api;
};

export default {
  storeToken,
  removeToken,
};
