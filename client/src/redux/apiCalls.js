import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { puplicRequest } from "../requesMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await puplicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await puplicRequest.post("/auth/register", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
