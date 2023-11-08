import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Layout = styled.div`
  display: grid;
  max-width: 375px;
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-rows: max-content 1fr 0px;
  overflow: hidden;
  outline: rgba(179, 179, 179, 0.39) solid 1px;
`;

export const Header = styled.div`
  width: 100%;
  height: 64px;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 20px;
  gap: 20px;
  background-color: #d9d9d9;
`;

export const HeaderText = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
`;

export const Contents = styled.div`
  overflow-x: hidden;
  width: 100%;
  position: relative;
  height: 100dvh;
`;
