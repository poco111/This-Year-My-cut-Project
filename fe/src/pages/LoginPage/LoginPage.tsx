import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginPageStyle';
import { Layout, TextInput, Button } from '@components/commons';

export const LoginPage = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const backBtnClickHandler = () => {
    navigate('/');
  };

  const onClickLogin = async () => {
    if (idRef.current && passwordRef.current) {
      const response = await fetch('http://101.101.211.191:8080/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: idRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      const result = await response.json();

      console.log(result);
    }
  };

  // const test = async () => {
  //   const response = await fetch('http://101.101.211.191:8080/ex01');

  //   const result = await response.json();

  //   console.log(result);
  // };

  // test();

  return (
    <>
      <Layout isHeader={true} previousPage="홈으" onClick={backBtnClickHandler}>
        <S.LoginPage>
          <S.TitleSection>올해 내 컷</S.TitleSection>
          <S.ContentsSection>
            <S.ContentDescription>올해 내 컷을 보려면 로그인해주세요.</S.ContentDescription>
            <S.InputSection>
              <TextInput label="아이디" ref={idRef} />
              <TextInput label="패스워드" ref={passwordRef} type="password" />
            </S.InputSection>
            <Button title="로그인" size="large" state="default" onClick={onClickLogin} />
            <S.TermsOfService>
              계속 진행하면 올해 내 컷{' '}
              <S.Link href="https://www.naver.com" target="_blank" rel="noopener noreferrer">
                서비스 이용약관
              </S.Link>{' '}
              및{' '}
              <S.Link href="https://www.naver.com" target="_blank" rel="noopener noreferrer">
                개인정보처리방침
              </S.Link>{' '}
              동의한 것으로 간주됩니다.
            </S.TermsOfService>
          </S.ContentsSection>
        </S.LoginPage>
      </Layout>
    </>
  );
};
