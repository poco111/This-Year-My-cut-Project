import { Outlet } from 'react-router-dom';
import * as S from './LayoutStyle';
import { Icon } from '../Icon/Icon';

export interface LayoutProps {
  previousPage?: string;
  isHeader?: boolean;
  children?: React.ReactNode;
}

export const Layout = ({ previousPage, isHeader, children }: LayoutProps) => {
  return (
    <S.Wrap>
      <S.Layout>
        {isHeader && (
          <S.Header>
            <Icon name="arrow" size={24} />
            <S.HeaderText>{previousPage}로</S.HeaderText>
          </S.Header>
        )}
        <S.Contents>
          <Outlet />
          {children}
        </S.Contents>
      </S.Layout>
    </S.Wrap>
  );
};
