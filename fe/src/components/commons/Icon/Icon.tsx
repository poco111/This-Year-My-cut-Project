import * as S from './IconStyle';
import { IconStyleProps } from './IconStyle';
import IconComponents from '@assets/icons';

interface IconProps extends IconStyleProps {
  name: string;
  onClick?: () => void;
}

export const Icon = ({ name, size, onClick }: IconProps) => {
  const IconComponent = IconComponents[name];

  return (
    <S.Icon onClick={onClick} size={size}>
      <IconComponent id={name} width={size} height={size} />
    </S.Icon>
  );
};
