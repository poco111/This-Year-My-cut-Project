import * as S from './HomePageStyle';
import { Layout, Button } from '@components/commons';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout isHeader={false}>
        <S.HomePage>
          <S.TitleSection>올해 내 컷</S.TitleSection>
          <S.ButtonSection>
            <Button title="로그인" size="large" onClick={() => navigate('/login')} />
            <Button title="회원가입" size="large" onClick={() => navigate('signUp')} />
          </S.ButtonSection>
        </S.HomePage>
      </Layout>
    </>
  );
};
