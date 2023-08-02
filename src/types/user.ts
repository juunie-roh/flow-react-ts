type UserState = {
  isLoggedIn: boolean,
  userName: string,
  userId: string,
  userInfo: string,
  authorization: string
}

type UserAction =
  | { type: 'TOGGLE_LOGIN'; isLoggedIn: boolean }
  | { type: 'SET_NAME'; userName: string }
  | { type: 'SET_ID'; userId: string }
  | { type: 'SET_INFO'; userInfo: string }
  | { type: 'SET_AUTH'; authorization: string };

export type {
  UserState,
  UserAction
}