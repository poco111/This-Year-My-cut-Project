import styled from 'styled-components';

export const CategoryPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 40px 20px 40px 21px;
`;

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 32px;
`;

export const Title = styled.div`
  color: #221814;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HighlightedTitle = styled.div`
  color: #fb9b2d;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline;
`;

export const Description = styled.div`
  color: #221814;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const HighlightedDescription = styled.div`
  color: #fb9b2d;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  display: inline;
`;

export const CategorySection = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr); /* 2행 생성 */
  grid-template-columns: repeat(2, 1fr); /* 6열 생성 */
  gap: 16px; /* 셀 간격 설정 */
  margin-bottom: 105px;
`;

export const Category = styled.button`
  background-color: #ddd7cf;
  color: #847871;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
