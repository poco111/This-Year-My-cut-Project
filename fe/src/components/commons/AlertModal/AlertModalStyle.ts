import styled from 'styled-components';

export interface AlertModalStyleProps {
  hasCancelBtn?: boolean;
}

export const Layout = styled.div`
  display: flex;
  align-items: center;
  margin: 326px 20px 293px 21px;
  z-index: 3;
`;

export const AlertModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 334px;
  height: 193px;
  border-radius: 16px;
  background: #fff;
  padding-top: 32px;
`;

export const Title = styled.div`
  color: #221814;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
`;

export const Message = styled.div`
  color: #221814;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 32px;
`;

export const ButtonSection = styled.div<AlertModalStyleProps>`
  border-top: 1px solid #d9d9d9;
  width: 100%;
  height: 61px;
  display: flex;
  background-color: #fff;
  border-radius: 0 0 16px 16px;
  justify-content: ${({ hasCancelBtn }) => (hasCancelBtn ? 'space-between' : 'center')};
`;

export const ConfirmButton = styled.button<AlertModalStyleProps>`
  color: #221814;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  border: none;
  background-color: #fff;
  border-radius: ${({ hasCancelBtn }) => (hasCancelBtn ? '0 0 0 16px' : '0 0 16px 16px')};
  cursor: pointer;
`;

export const CancelButton = styled.button`
  color: #e6290f;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  background-color: #fff;
  border: none;
  border-right: 1px solid #d9d9d9;
  border-radius: 0 0 0 16px;
  cursor: pointer;
`;

export const BackDrop = styled.div`
  position: fixed;
  max-width: 375px;
  width: 100%;
  max-height: 812px;
  height: 100%;
  background-color: rgba(46, 46, 46, 0.7);
  z-index: 2;
`;
