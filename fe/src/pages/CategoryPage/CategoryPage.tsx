import * as S from './CategoryPageStyle';
import { Button, Layout } from '@components/commons';
import { useNavigate } from 'react-router-dom';

const tempCategoryList = [
  '올해의 책',
  '올해의 음식',
  '올해의 음식',
  '올해의 음식',
  '올해의 음식',
  '올해의 음식',
  '올해의 음식',
  '올해의 음식',
  '올해의 음식',
  '올해의 음식',
  '올해의 음식',
  '올해의 음식',
];

export const CategoryPage = () => {
  const navigate = useNavigate();

  const backBtnClickHandler = () => {
    navigate('/');
  };
  return (
    <Layout isHeader={true} previousPage="마이페이지" onClick={backBtnClickHandler}>
      <S.CategoryPage>
        <S.TitleSection>
          <S.Title>가나다님의 1년,</S.Title>
          <S.Title>
            <S.HighlightedTitle>무엇</S.HighlightedTitle>을 기록하고 싶나요
          </S.Title>
          <S.Description>
            <S.HighlightedDescription>4개</S.HighlightedDescription>를 선택해주세요!
          </S.Description>
        </S.TitleSection>
        <S.CategorySection>
          {tempCategoryList.map((category, i) => (
            <Button
              key={i}
              title={category}
              state={i !== 2 ? 'category' : 'selectedCategory'}
              size="small"
            />
          ))}
        </S.CategorySection>
        <S.ButtonSection>
          <Button title="저장하기" state="default" size="large"></Button>
        </S.ButtonSection>
      </S.CategoryPage>
    </Layout>
  );
};
