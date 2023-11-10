import { useRef, useState } from 'react';
import * as S from './WriteModalStyle';
import { Button, Icon, Portal } from '@components/commons';

interface WriteModalProps {
  openState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined;
}

export const WriteModal = ({ openState }: WriteModalProps) => {
  const [isOpen, setIsOpen] = openState || [false, () => {}];
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fileClickHandler = () => {
    console.log(1);
    fileInputRef.current?.click();
  };

  const fileOnChangeHandler = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(2);
    const reader = new FileReader();
    const file = files?.[0];

    file && reader.readAsDataURL(file);

    reader.onload = ({ target }) => {
      const targetFile = target?.result as string;
      if (targetFile && file) {
        setImageUrl && setImageUrl(targetFile);
      }
    };
  };

  const backDropHandler = ({ target, currentTarget }: React.MouseEvent<HTMLElement>) => {
    if (target === currentTarget) {
      setIsOpen(false);
    }
  };

  const closeBtnHandler = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal id="modal-root">
      <S.BackDrop onClick={backDropHandler} />
      <S.Layout>
        <S.WriteModal>
          <S.CloseIcon onClick={closeBtnHandler}>
            <Icon name="close" size={24}></Icon>
          </S.CloseIcon>
          <S.Title>올해의 음식</S.Title>
          <S.ImgContainer onClick={fileClickHandler}>
            <S.FileInput
              type="file"
              accept="image/*"
              onChange={fileOnChangeHandler}
              ref={fileInputRef}
            />
            {!imageUrl && (
              <S.BlankImg>
                <Icon name="plus" size={48} />
              </S.BlankImg>
            )}
            {imageUrl && <S.Img imgUrl={imageUrl}></S.Img>}
          </S.ImgContainer>
          <S.DescriptionTitle>어떤 에피소드가 있었나요?</S.DescriptionTitle>
          <S.TextArea placeholder="어떤 에피소드가 있었나요?(120자)" maxLength={120} />
          <Button title="저장하기" state="default" size="normal" />
        </S.WriteModal>
      </S.Layout>
    </Portal>
  );
};

// reducer를 내려줘야할듯
