type TOGGLE_LOGIN = 'TOGGLE_LOGIN';
type SET_NAME = 'SET_NAME';
type SET_ID = 'SET_ID';
type SET_INFO = 'SET_INFO';
type SET_AUTH = 'SET_AUTH';

type UserState = {
  isLoggedIn: boolean,
  userName: string,
  userId: string,
  userInfo: string,
  authorization: string
}

type UserAction =
  | { type: TOGGLE_LOGIN; isLoggedIn: boolean }
  | { type: SET_NAME; userName: string }
  | { type: SET_ID; userId: string }
  | { type: SET_INFO; userInfo: string }
  | { type: SET_AUTH; authorization: string };

export type {
  TOGGLE_LOGIN,
  SET_NAME,
  SET_ID,
  SET_INFO,
  SET_AUTH,
  UserState,
  UserAction
}