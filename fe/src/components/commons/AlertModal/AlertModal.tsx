import * as S from './AlertModalStyle';
import { Portal } from '../Portal/Portal';
import { AlertModalStyleProps } from './AlertModalStyle';

export interface AlertModalProps extends AlertModalStyleProps {
  title?: string;
  message?: string;
  buttonName?: string;
  openState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined;
}

export const AlertModal = ({
  openState,
  title,
  message,
  buttonName,
  hasCancelBtn,
}: AlertModalProps) => {
  const [isOpen, setIsOpen] = openState || [false, () => {}];

  if (!isOpen) {
    return null;
  }

  const backDropHandler = ({ target, currentTarget }: React.MouseEvent<HTMLElement>) => {
    if (target === currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <Portal id="modal-root">
      <S.BackDrop onClick={backDropHandler}>
        <S.Layout>
          <S.AlertModal>
            <S.Title>{title}</S.Title>
            <S.Message>{message}</S.Message>
            <S.ButtonSection hasCancelBtn={hasCancelBtn}>
              {hasCancelBtn && <S.CancelButton>취소</S.CancelButton>}
              <S.ConfirmButton>{buttonName}</S.ConfirmButton>
            </S.ButtonSection>
          </S.AlertModal>
        </S.Layout>
      </S.BackDrop>
    </Portal>
  );
};
