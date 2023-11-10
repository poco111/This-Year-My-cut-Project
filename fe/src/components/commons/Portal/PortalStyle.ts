import styled from 'styled-components';

export const PortalWrap = styled.div`
  display: grid;
  justify-items: center;
  position: relative;
  bottom: 812px;
`;

export const Portal = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr 0px;
  max-width: 375px;
  width: 100%;
  max-height: 812px;
  height: 100%;
  overflow: hidden;
  outline: rgba(179, 179, 179, 0.39) solid 1px;
  z-index: 1;
`;
