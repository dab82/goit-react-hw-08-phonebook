const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsFetchingCurrentUser = state => state.auth.isFetchingUser;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrentUser,
  getToken,
};

export default authSelectors;
