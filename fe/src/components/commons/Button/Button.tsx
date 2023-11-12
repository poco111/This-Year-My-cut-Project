import * as S from './ButtonStyle';
import { ButtonStyleProps } from './ButtonStyle';

// TODO: 클릭핸들러 이름 변경 필요
interface ButtonProps extends ButtonStyleProps {
  title: string;
  onClick?: () => void;
  categoryClickHandler?: (categoryIdx: number) => void;
  postClickHandler?: (selectedCategories) => void;
}

export const Button = ({
  title,
  state,
  size,
  onClick,
  categoryClickHandler,
  postClickHandler,
}: ButtonProps) => {
  const btnClickHandler = onClick
    ? onClick
    : (params) => {
        if (categoryClickHandler) {
          categoryClickHandler(params);
        }
        if (postClickHandler) {
          postClickHandler(params);
        }
      };

  return (
    <S.Button onClick={btnClickHandler} state={state} size={size}>
      {title}
    </S.Button>
  );
};
