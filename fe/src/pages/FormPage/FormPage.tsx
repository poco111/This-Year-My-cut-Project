import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import * as S from './FormPageStyle';
import { Icon, Button, WriteModal } from '@components/commons';

export const FormPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const captureRef = useRef(null);

  const CaptureBtnHandler = async () => {
    if (captureRef.current) {
      try {
        const canvas = await html2canvas(captureRef.current, { scale: 2 });
        canvas.toBlob((blob) => {
          if (blob) {
            saveAs(blob, 'This-Year-My-Cut.png');
          }
        });
      } catch (error) {
        // error 모달 만들고 error 처리
        console.error('Error capturing the div:', error);
      }
    }
  };

  const writeModalOpenHandler = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <S.Wrap>
        <S.Layout>
          <S.FormPage ref={captureRef}>
            <S.Title>
              <S.HighlightedTitle>사진</S.HighlightedTitle>과 함께{' '}
              <S.HighlightedTitle>기록</S.HighlightedTitle>해봐요!
            </S.Title>
            <S.ContentsSection>
              <S.ImgSection>
                <S.ContentContainer>
                  <S.Img></S.Img>
                  <S.ImgTitle>올해의 음식</S.ImgTitle>
                </S.ContentContainer>
                <S.ContentContainer>
                  <S.BlankImg onClick={writeModalOpenHandler}>
                    <Icon name="plus" size={48} />
                  </S.BlankImg>
                  <S.ImgTitle>올해의 책</S.ImgTitle>
                </S.ContentContainer>
              </S.ImgSection>
              <S.ImgSection>
                <S.DateText>(2023.01.01 - 2023.12.31)</S.DateText>
                <S.ContentContainer></S.ContentContainer>
                <S.ContentContainer></S.ContentContainer>
              </S.ImgSection>
            </S.ContentsSection>
          </S.FormPage>
          <S.Header>
            <S.HeaderButtonSection>
              <Icon name="arrow" size={24}></Icon>
              <S.HeaderText>무드로</S.HeaderText>
            </S.HeaderButtonSection>
          </S.Header>
          <S.ButtonSection>
            <Button title="저장하기" state="default" size="large" onClick={CaptureBtnHandler} />
          </S.ButtonSection>
        </S.Layout>
      </S.Wrap>
      <WriteModal openState={[isModalOpen, setIsModalOpen]}></WriteModal>
    </>
  );
};

// TODO: DB로 보내기전에, 사용자에게 더이상 수정할 수 없음을 알려주는 alert 창 필요
// TODO: 여기서 저장하기는 DB로 보내는 로직이 되어야함
