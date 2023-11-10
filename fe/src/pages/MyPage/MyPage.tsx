import { useRef } from 'react';
import html2canvas from 'html2canvas';
import * as S from './MyPageStyle';

export const MyPage = () => {
  const captureRef = useRef(null);

  // 캡처 기능 함수
  const handleCapture = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'This-Year-My-Cut.png';
      link.click();
    }
  };

  return (
    <S.MyPage>
      <div ref={captureRef}>
        <S.ScreenShopArea ref={captureRef}>
          <h1>Hello, World!</h1>
          <p>This is a captured HTML element.</p>
          <button onClick={handleCapture}>Capture and Save</button>
        </S.ScreenShopArea>
      </div>
    </S.MyPage>
  );
};
