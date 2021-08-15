import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, TRY_LOGIN } from "./actions";

export const tryLogin = (email, password) => {
  debugger;
  return {
    type: TRY_LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export const loginSuccess = () => {
  debugger;
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginfaild = () => {
  return {
    type: LOGIN_FAILED,
    payload:"falied to login"
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
