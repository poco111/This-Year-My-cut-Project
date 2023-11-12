import { API_URL } from '@constants/api';
import { ERROR_MESSAGE } from '@constants/error';

export const getAllCategories = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/board/category`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(ERROR_MESSAGE.UNDEFINED);

    return result;
  } catch (error) {
    return error;
  }
};

export const postSelectedCategory = async (categoryIds: number[] | null) => {
  try {
    const sortedCategoryIds = categoryIds?.sort((a, b) => a - b);
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/board/saveMyCategories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ categoryIds: sortedCategoryIds }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(ERROR_MESSAGE.UNDEFINED);

    return result;
  } catch (error) {
    return error;
  }
};
