type UserState = {
  userName: string,
  userId: string,
  userInfo: string,
  authorization: string
}

type UserAction =
  | { type: 'SET_NAME'; userName: string }
  | { type: 'SET_ID'; userId: string }
  | { type: 'SET_INFO'; userInfo: string }
  | { type: 'SET_AUTH'; authorization: string };

export type {
  UserState,
  UserAction
}