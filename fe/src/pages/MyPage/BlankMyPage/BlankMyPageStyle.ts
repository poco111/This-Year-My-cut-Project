import styled from 'styled-components';
import blankPageImage from '@assets/images/blankPageImage.svg';

export const BlankMyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 56px 20px 40px 20px;
`;

export const Title = styled.div`
  width: 180px;
  height: 29px;
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 40px;
  margin-right: 140px;
`;

export const HighlightedTitle = styled.div`
  color: #ff5c0a;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline;
`;

export const ContentSection = styled.div`
  width: 335px;
  height: 509px;
  margin-bottom: 82px;
  padding: 113px 81px 112px 82px;
  background-color: #fff;
`;

export const ImageSection = styled.div`
  width: 171px;
  height: 237px;
  background-image: url(${blankPageImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  width: 150px;
  height: 30px;
  color: #1e1e1e;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.44px;
`;
