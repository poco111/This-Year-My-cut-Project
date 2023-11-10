import styled from 'styled-components';
// import ground from '@pages/MyPage/ground.svg';

export const Wrap = styled.div`
  display: grid;
  justify-items: center;
`;

export const Layout = styled.div`
  display: grid;
  max-width: 375px;
  width: 100%;
  max-height: 812px;
  height: 100%;
  grid-template-rows: max-content 1fr 0px;
  overflow: hidden;
  outline: rgba(179, 179, 179, 0.39) solid 1px;
  background-color: #f9f5ed;
`;

export const Header = styled.div`
  width: 100%;
  height: 56px;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 16px;
  gap: 4px;
  background-color: #f9f5ed;
`;

export const ButtonSection = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const HeaderText = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
  padding-top: 4px;
`;

export const Contents = styled.div`
  overflow-x: hidden;
  width: 100%;
  position: relative;
  height: 100%;
`;
