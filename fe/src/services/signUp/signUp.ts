import { FormDataState, Action } from '@pages/SignUpPage/SignUpPage';
import { API_URL } from '@constants/api';

export const checkIdValidity = (id: string): boolean => {
  const regex = /^[a-z0-9_-]{5,20}$/;
  return regex.test(id);
};

export const checkPasswordValidity = (password: string): boolean => {
  const regex = /^[a-z0-9_-]{5,20}$/;
  return regex.test(password);
};

export const checkNickNameValidity = (nickName: string): boolean => {
  const regex = /^[a-z가-힣0-9]{3,9}$/;
  return regex.test(nickName);
};

export const formReducer = (state: FormDataState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INPUT_ID':
      return {
        ...state,
        id: { enteredId: payload, isValid: checkIdValidity(payload), isTouched: true },
      };
    case 'INPUT_PASSWORD':
      return {
        ...state,
        password: {
          enteredPassword: payload,
          isValid: checkPasswordValidity(payload),
          isTouched: true,
        },
      };
    case 'INPUT_NICKNAME':
      return {
        ...state,
        nickName: {
          enteredNickName: payload,
          isValid: checkNickNameValidity(payload),
          isTouched: true,
        },
      };
    default:
      return state;
  }
};

export const signUpUser = async (id: string, password: string, nickName: string) => {
  try {
    const response = await fetch(`${API_URL}/user/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: id, userPw: password, nickName: nickName }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    return error;
  }
};
