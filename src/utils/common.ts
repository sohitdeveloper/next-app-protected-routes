export const setTokenLocal = (token: string) => {
  localStorage.setItem(
    LocalStorageConstants.KEYS.JWTToken,
    JSON.stringify(token)
  );
};

export const getTokenLocal = () => {
  const tokenString: any = localStorage.getItem(
    LocalStorageConstants.KEYS.JWTToken
  );
  const userToken = JSON.parse(tokenString);
  return userToken;
};

export const setUser = (user: any) => {
  localStorage.setItem(LocalStorageConstants.KEYS.user, JSON.stringify(user));
};

export const getUser = () => {
  const user: any = localStorage.getItem(LocalStorageConstants.KEYS.user);
  const userInfo = JSON.parse(user);
  return userInfo;
};

export const setRoleLocal = (role: string) => {
  localStorage.setItem(LocalStorageConstants.KEYS.role, JSON.stringify(role));
};

export const getRoleLocal = () => {
  const roleString: any = localStorage.getItem(LocalStorageConstants.KEYS.role);
  const userRole = JSON.parse(roleString);
  return userRole;
};

export const flushLocalstorage = () => {
  Object.keys(LocalStorageConstants.KEYS).map((key) => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  });
};

const LocalStorageConstants = {
  KEYS: {
    JWTToken: "JWTToken",
    email: "email",
    user: "user",
    role: "role",
    error: "error",
    refresh_token: "refresh",
  },
};

export default LocalStorageConstants;
