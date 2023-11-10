import styled, { css } from 'styled-components';

export interface ButtonStyleProps {
  state: keyof typeof states;
  size: keyof typeof sizes;
}

const sizes = {
  large: css`
    width: 334px;
    height: 56px;
  `,
  normal: css`
    width: 300px;
    height: 56px;
  `,
  medium: css`
    width: 159px;
    height: 56px;
  `,
  small: css`
    width: 159px;
    height: 52px;
  `,
};

const states = {
  default: css`
    background-color: #221814;
    color: #ffffff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
  `,
  inactive: css`
    background-color: #ddd7cf;
    color: #ffffff;
    pointer-events: none;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
  `,
  signUp: css`
    background-color: #fb9b2d;
    color: #221814;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
  `,
  category: css`
    background-color: #ddd7cf;
    color: #847871;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    border-radius: 8px;
    border: 1px solid #ddd7cf;
    cursor: pointer;
  `,
  selectedCategory: css`
    background: #221814;
    color: #fff;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    border-radius: 8px;
    border: 1px solid #221814;
    cursor: pointer;
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
`;
