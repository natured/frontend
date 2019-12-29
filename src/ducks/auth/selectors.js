// given auth state, boolean of whether user has been fetched
function checkedForUser({ user }) {
  return user !== null;
}

// given auth state, whether there is a logged in user
function isLoggedIn({ user }) {
  return user !== false;
}

function getUserId({ user }) {
  return user ? user.id : null;
}

export default {
  checkedForUser,
  isLoggedIn,
  getUserId,
};
