import * as S from './MoodPageStyle';
import { Layout, Button } from '@components/commons';

export const MoodPage = () => {
  return (
    <Layout isHeader={true} previousPage="카테고리">
      <S.MoodPage>
        <S.TitleSection>
          <S.Title>가나다라님의 1년,</S.Title>
          <S.Title>
            어떤 <S.HighlightedTitle>무드</S.HighlightedTitle>로 기록하고 싶나요?
          </S.Title>
          <S.Description>
            더 예쁜 내 컷을 만들 수 있게 다양한 디자인을 준비 중이에요:)
          </S.Description>
        </S.TitleSection>
        <S.ContentSection>
          <S.SkinImg />
          <S.IndicatorSection>
            <S.IndicatorText>1</S.IndicatorText>
            <S.Divider />
            <S.IndicatorText>3</S.IndicatorText>
          </S.IndicatorSection>
        </S.ContentSection>
        <Button title="사진으로 채우기" state="default" size="large" />
      </S.MoodPage>
    </Layout>
  );
};
