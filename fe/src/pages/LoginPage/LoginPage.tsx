import { useRef } from 'react';
import * as S from './LoginPageStyle';
import { Layout, TextInput, Button } from '@components/commons';

export const LoginPage = () => {
  const IdRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);

  const onClickLogin = () => {
    console.log(IdRef?.current?.value);
    console.log(PasswordRef?.current?.value);
  };

  return (
    <>
      <Layout isHeader={false}>
        <S.LoginPage>
          <S.TitleSection>올해 내 컷</S.TitleSection>
          <S.ContentsSection>
            <S.ContentDescription>올해 내 컷을 보려면 로그인해주세요.</S.ContentDescription>
            <S.InputSection>
              <TextInput label="아이디" ref={IdRef} />
              <TextInput label="패스워드" ref={PasswordRef} type="password" />
            </S.InputSection>
            <Button title="로그인" size="large" onClick={onClickLogin} />
            <S.TermsOfService>
              계속 진행하면 올해 내 컷 서비스 이용약관에 동의한 것으로 간주됩니다.
            </S.TermsOfService>
          </S.ContentsSection>
        </S.LoginPage>
      </Layout>
    </>
  );
};
