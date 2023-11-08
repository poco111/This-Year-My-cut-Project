import * as S from './ButtonStyle';
import { ButtonStyleProps } from './ButtonStyle';

interface ButtonProps extends ButtonStyleProps {
  title: string;
  onClick?: () => void;
}

export const Button = ({ title, state, size, onClick }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} state={state} size={size}>
      {title}
    </S.Button>
  );
};
