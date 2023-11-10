import * as S from './HomePageStyle';
import { Layout, Button } from '@components/commons';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout isHeader={false}>
      <S.HomePage>
        <S.TitleSection>올해 내 컷</S.TitleSection>
        <S.ButtonSection>
          <Button title="회원가입" size="large" state="signUp" onClick={() => navigate('signUp')} />
          <Button title="로그인" size="large" state="default" onClick={() => navigate('/login')} />
        </S.ButtonSection>
      </S.HomePage>
    </Layout>
  );
};
