import styled from 'styled-components';

export interface IconStyleProps {
  size: number;
}

export const Icon = styled.div<IconStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
