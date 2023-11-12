import styled from 'styled-components';
import firstBackground from '@assets/images/firstBackground.svg';
import firstCard from '@assets/images/firstCard.svg';

interface FormPageStyleProps {
  backgroundImg?: string;
}

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Layout = styled.div`
  display: grid;
  max-width: 375px;
  width: 100%;
  max-height: 812px;
  height: 100%;
  grid-template-rows: max-content 1fr 0px;
  overflow: hidden;
  outline: rgba(179, 179, 179, 0.39) solid 1px;
  background-color: #f9f5ed;
`;

export const FormPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 812px;
  background-image: url(${firstBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left;
  padding: 76px 20px 189px 20px;
`;

export const Header = styled.div`
  width: 375px;
  height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 20px;
  z-index: 1;
  position: absolute;
`;

export const HeaderButtonSection = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const HeaderText = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
  padding-top: 4px;
`;

export const Title = styled.div`
  color: #221814;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-right: 100px;
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

export const ContentsSection = styled.div`
  display: flex;
  width: 100%;
  height: 510px;
  gap: 13.5px;
`;

export const ImgSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 159.5px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 235px;
  display: flex;
  flex-direction: column;
  background-image: url(${firstCard});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left;
  margin-bottom: 13.5px;
  padding: 12px 12px 15px 12px;
  gap: 8px;
`;

export const Img = styled.div<FormPageStyleProps>`
  width: 135px;
  height: 180px;
  cursor: pointer;
  background-color: red;
  background-image: url(${({ backgroundImg }) => backgroundImg});
`;

export const BlankImg = styled.div`
  width: 135px;
  height: 180px;
  background-color: #ede7de;
  cursor: pointer;
  padding: 66px 43px;
`;

export const ImgTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: right;
`;

export const DateText = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  padding-top: 8px;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 20px;
  z-index: 1;
  position: absolute;
  top: 700px;
`;
