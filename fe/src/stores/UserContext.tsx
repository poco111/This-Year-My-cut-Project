import { useReducer, createContext, Dispatch } from 'react';

interface UserInfo {
  memberIdx: number | null;
  nickName: string | null;
  hasHistory: boolean | null;
}

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOGIN':
      return {
        memberIdx: payload.memberIdx,
        nickName: payload.nickName,
        hasHistory: payload.hasHistory,
      };
    case 'LOGOUT':
      return {
        memberIdx: null,
        nickName: null,
        hasHistory: null,
      };
  }
};

type UserAction = { type: 'LOGIN'; payload: UserInfo } | { type: 'LOGOUT' };
type UserContextDispatch = Dispatch<UserAction>;

const initialState: UserInfo = {
  memberIdx: null,
  nickName: null,
  hasHistory: null,
};

export const UserInfoContext = createContext<UserInfo | null | undefined>(null);
export const UserDispatchContext = createContext<UserContextDispatch | null>(null);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserInfoContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserInfoContext.Provider>
  );
};
