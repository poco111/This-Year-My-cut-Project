import styled from 'styled-components';

interface WriteModalStyleProps {
  imgUrl?: string;
}

export const Layout = styled.div`
  display: flex;
  align-items: center;
  margin: 104px 20px 100px 21px;
  z-index: 3;
`;

export const WriteModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 334px;
  height: 608px;
  border-radius: 16px;
  background: #fff;
  padding: 32px 18px 20px 18px;
`;

export const CloseIcon = styled.div`
  position: relative;
  top: -16px;
  left: 136px;
  cursor: pointer;
`;

export const Title = styled.div`
  color: #221814;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  height: 24px;
  margin-bottom: 24px;
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: 200px;
  cursor: pointer;
`;

export const FileInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
`;

export const BlankImg = styled.div`
  width: 150px;
  height: 200px;
  background-color: #ede7de;
  cursor: pointer;
  padding: 77px 50px 75px 52px;
  border-radius: 8px;
`;

export const Img = styled.div<WriteModalStyleProps>`
  width: 150px;
  height: 200px;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 8px;
`;

export const DescriptionTitle = styled.div`
  color: #221814;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 25px;
  margin-bottom: 8px;
  padding-right: 120px;
`;

export const TextArea = styled.textarea`
  color: #221814;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 301px;
  height: 176px;
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid #ddd7cf;
  background: #f9f5ed;
  outline: 0;
  resize: none;
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
