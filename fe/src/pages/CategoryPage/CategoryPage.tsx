import * as S from './CategoryPageStyle';
import { useState, useEffect, useContext } from 'react';
import { Button, Layout } from '@components/commons';
import { useNavigate } from 'react-router-dom';
import { getAllCategories, postSelectedCategory } from '@services/category/category';
import { UserInfoContext } from '@stores/UserContext';

interface Category {
  id: number;
  categoryName: string;
}

export const CategoryPage = () => {
  const [allCategories, setAllCategories] = useState<Category[] | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<number[] | null>([]);
  const state = useContext(UserInfoContext);

  const navigate = useNavigate();
  const backBtnClickHandler = () => {
    if (!state?.hasHistory) {
      navigate('/blankMyPage');
    }
  };

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const allCategories = await getAllCategories();
        setAllCategories(allCategories);
      } catch (error) {
        console.log(error); // TODO: 에러모달로 변경하기
      }
    };

    fetchAllCategories();
  }, []);

  const selectCategoryHandler = (categoryIdx) => {
    if (selectedCategories && selectedCategories.includes(categoryIdx)) {
      setSelectedCategories(
        selectedCategories.filter((selectedCategory) => selectedCategory !== categoryIdx),
      );
    }
    if (
      selectedCategories &&
      !selectedCategories.includes(categoryIdx) &&
      selectedCategories.length !== 4
    ) {
      setSelectedCategories([...selectedCategories, categoryIdx]);
    }
  };

  const postClickHandler = async (selectedCategories) => {
    try {
      await postSelectedCategory(selectedCategories);
      navigate('/mood');
    } catch (error) {
      console.log(error); // TODO: 에러모달로 변경하기
    }
  };

  return (
    <Layout isHeader={true} previousPage="마이페이지" onClick={backBtnClickHandler}>
      <S.CategoryPage>
        <S.TitleSection>
          <S.Title>{state?.nickName}님의 1년,</S.Title>
          <S.Title>
            <S.HighlightedTitle>무엇</S.HighlightedTitle>을 기록하고 싶나요
          </S.Title>
          <S.Description>
            <S.HighlightedDescription>4개</S.HighlightedDescription>를 선택해주세요!
          </S.Description>
        </S.TitleSection>
        <S.CategorySection>
          {allCategories?.map((category) => (
            <Button
              key={category.id}
              title={category.categoryName}
              state={selectedCategories?.includes(category.id) ? 'selectedCategory' : 'category'}
              size="small"
              categoryClickHandler={() => selectCategoryHandler(category.id)}
            />
          ))}
        </S.CategorySection>
        <Button
          title="저장하기"
          state={selectedCategories?.length === 4 ? 'default' : 'inactive'}
          size="large"
          onClick={() => postClickHandler(selectedCategories)}
        />
      </S.CategoryPage>
    </Layout>
  );
};
