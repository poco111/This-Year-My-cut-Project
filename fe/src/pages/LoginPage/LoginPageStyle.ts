import styled from 'styled-components';
import projectLogo from '@assets/images/projectLogo.svg';
import loginPageLogo from '@assets/images/loginPageLogo.svg';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 24px 20px 58px 20px;
`;

export const TitleImg = styled.div`
  background-image: url(${projectLogo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 180px;
  height: 40px;
  margin-bottom: 64px;
`;

export const ProjectLogo = styled.div`
  background-image: url(${loginPageLogo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 140px;
  margin-bottom: 60px;
`;

export const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContentDescription = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TermsOfService = styled.div`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 8px;
`;

export const Link = styled.a`
  text-decoration: underline;
`;
