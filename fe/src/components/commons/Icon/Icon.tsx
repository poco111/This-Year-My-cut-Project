import * as S from './IconStyle';
import { IconStyleProps } from './IconStyle';
import IconComponents from '@assets/icons';

interface IconProps extends IconStyleProps {
  name: string;
}

export const Icon = ({ name, size }: IconProps) => {
  const IconComponent = IconComponents[name];

  return (
    <S.Icon size={size}>
      <IconComponent id={name} width={size} height={size} />
    </S.Icon>
  );
};
