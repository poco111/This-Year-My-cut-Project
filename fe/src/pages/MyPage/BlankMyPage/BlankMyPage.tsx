import * as S from './BlankMyPageStyle';
import { Layout, Button } from '@components/commons';
import { useContext } from 'react';
import { UserInfoContext } from '@stores/UserContext';
import { useNavigate } from 'react-router-dom';

export const BlankMyPage = () => {
  const state = useContext(UserInfoContext);
  const navigate = useNavigate();

  const startBtnClickHandler = () => {
    navigate('/category');
  };

  return (
    <Layout isHeader={false}>
      <S.BlankMyPage>
        <S.Title>
          <S.HighlightedTitle>{state?.nickName}</S.HighlightedTitle>
          님의 1년
        </S.Title>
        <S.ContentSection>
          <S.ImageSection />
          <S.Description>아직 기록이 없어요!</S.Description>
        </S.ContentSection>
        <Button
          title="올해 내 컷 시작하기"
          size="large"
          state="default"
          onClick={startBtnClickHandler}
        />
      </S.BlankMyPage>
    </Layout>
  );
};
