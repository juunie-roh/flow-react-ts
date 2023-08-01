import React, { Dispatch, createContext, useContext, useReducer } from 'react'
import { UserState, UserAction } from '../types/user';

type UserDispatch = Dispatch<UserAction>;

const AuthStateContext = createContext<UserState>({
  userName: "",
  userId: "",
  userInfo: "",
  authorization: ""
});
const AuthDispatchContext = createContext<UserDispatch>(() => null);

const reducer = (state: UserState, action: UserAction): UserState => {

  switch (action.type) {

    case 'SET_NAME':
      return {
        ...state,
        userName: action.userName
      };
    case 'SET_ID':
      return {
        ...state,
        userId: action.userId
      };
    case 'SET_INFO':
      return {
        ...state,
        userInfo: action.userInfo
      };
    case 'SET_AUTH':
      return {
        ...state,
        authorization: action.authorization
      };
    default:
      throw new Error('Unhandled action');

  }
}

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [state, dispatch] = useReducer(reducer, {
    userName: "name",
    userId: "id",
    userInfo: "information",
    authorization: "authorization"
  });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

const useAuthState = (): UserState => {
  const state = useContext(AuthStateContext);
  return state;
}

const useAuthDispatch = (): UserDispatch => {
  const dispatch = useContext(AuthDispatchContext);
  return dispatch;
}

export {
  AuthContextProvider,
  useAuthState,
  useAuthDispatch
}