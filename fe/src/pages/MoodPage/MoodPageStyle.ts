import styled from 'styled-components';

interface MoodPageStyleProps {
  selected?: boolean;
  skinImgUrl?: string;
}

export const MoodPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 40px 20px 40px 20px;
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
  letter-spacing: -0.308px;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SkinImg = styled.div<MoodPageStyleProps>`
  width: 335px;
  height: 392px;
  background-color: red;
  background-image: url(${({ skinImgUrl }) => skinImgUrl});
`;

export const IndicatorSection = styled.div`
  display: flex;
  margin: 0 auto;
  width: 65px;
  height: 33px;
  padding: 8px 16px 8px 16px;
  background-color: #fff;
  border-radius: 68px;
  margin-bottom: 56px;
`;

export const IndicatorText = styled.div<MoodPageStyleProps>`
  width: 9px;
  height: 17px;
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: ${({ selected }) => (selected ? '#221814' : '#ddd7cf')};
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background-color: #ddd7cf;
  margin: 0 8px 0 8px;
`;
