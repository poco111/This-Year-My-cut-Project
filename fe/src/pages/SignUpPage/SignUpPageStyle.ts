import styled from 'styled-components';

export const SignUpPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 24px 20px 58px 20px;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  margin-bottom: 141px;
`;

export const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentDescription = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 24px;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const TermsOfService = styled.div`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 32px;
`;

export const Link = styled.a`
  text-decoration: underline;
`;

export const AlertText = styled.div`
  font-size: 8px;
  color: #a63641;
  padding-left: 4px;
`;
