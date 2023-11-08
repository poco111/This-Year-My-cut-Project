import styled, { css } from 'styled-components';

export interface ButtonStyleProps {
  state?: keyof typeof states;
  size?: keyof typeof sizes;
}

const sizes = {
  large: css`
    width: 334px;
    height: 56px;
  `,
  medium: css`
    width: 300px;
    height: 56px;
  `,
  small: css`
    width: 159px;
    height: 56 px;
  `,
};

const states = {
  default: css`
    background-color: #d9d9d9;
    color: #000000;
  `,
  inactive: css`
    background-color: #f8fafb;
    color: #ced3d6;
    pointer-events: none;
  `,
  reverse: css`
    background-color: #ffffff;
    color: #000000;
  `,
};

const statesStyle = css<ButtonStyleProps>`
  ${({ state }) =>
    state &&
    states[state] &&
    css`
      ${states[state]}
    `}
`;

const sizeStyle = css<ButtonStyleProps>`
  ${({ size }) =>
    size &&
    sizes[size] &&
    css`
      ${sizes[size]}
    `}
`;

export const Button = styled.button<ButtonStyleProps>`
  ${statesStyle}
  ${sizeStyle}
  border-radius: 8px;
  border: none;
  cursor: pointer;
  size: 18px;
`;
