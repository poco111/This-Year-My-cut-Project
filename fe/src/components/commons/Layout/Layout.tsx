import { Outlet } from 'react-router-dom';
import * as S from './LayoutStyle';
import { Icon } from '../Icon/Icon';

export interface LayoutProps {
  previousPage?: string;
  isHeader?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Layout = ({ previousPage, isHeader, children, onClick }: LayoutProps) => {
  return (
    <S.Wrap>
      <S.Layout>
        {isHeader && (
          <S.Header>
            <S.ButtonSection onClick={onClick}>
              <Icon name="arrow" size={24} />
              <S.HeaderText>{previousPage}로</S.HeaderText>
            </S.ButtonSection>
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
