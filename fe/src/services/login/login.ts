import { API_URL } from '@constants/api';

export const authenticateUser = async (userId, userPw) => {
  try {
    const response = await fetch(`${API_URL}/user/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userId, userPw: userPw }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    return error;
  }
};
