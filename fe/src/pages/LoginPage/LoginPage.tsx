import { useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginPageStyle';
import { Layout, TextInput, Button, AlertModal } from '@components/commons';
import { authenticateUser } from '@services/login/login';
import { UserDispatchContext } from '@stores/UserContext';

export const LoginPage = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useContext(UserDispatchContext);

  const backBtnClickHandler = () => {
    navigate('/');
  };

  const onClickLogin = async () => {
    if (idRef.current && passwordRef.current) {
      try {
        const response = await authenticateUser(idRef.current.value, passwordRef.current.value);

        localStorage.setItem('token', response.token);
        dispatch && dispatch({ type: 'LOGIN', payload: response.memberInfo });
        if (!response.hasHistory) {
          navigate('/blankMyPage');
        }
      } catch (error) {
        console.log(1);
        setErrorMessage((error as Error).message);
        setIsErrorModalOpen(true);
      }
    }
  };

  return (
    <>
      <Layout isHeader={true} previousPage="홈으" onClick={backBtnClickHandler}>
        <S.LoginPage>
          <S.TitleImg />
          <S.ProjectLogo />
          <S.ContentsSection>
            <S.ContentDescription>올해 내 컷을 보려면 로그인해주세요.</S.ContentDescription>
            <S.InputSection>
              <TextInput label="아이디" ref={idRef} />
              <TextInput label="패스워드" ref={passwordRef} type="password" />
            </S.InputSection>
            <Button title="로그인" size="large" state="default" onClick={onClickLogin} />
            <S.TermsOfService>
              계속 진행하면 올해 내 컷{' '}
              <S.Link
                href="https://thisyearmycutpotential.notion.site/89848fa20ea7407cb0a2888337f52b13?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                서비스 이용약관
              </S.Link>{' '}
              및{' '}
              <S.Link
                href="https://thisyearmycutpotential.notion.site/025a2b6f53e34fd5bad14ddf8ac9ddb2?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                개인정보처리방침
              </S.Link>{' '}
              동의한 것으로 간주됩니다.
            </S.TermsOfService>
          </S.ContentsSection>
        </S.LoginPage>
      </Layout>
      <AlertModal message={errorMessage} openState={[isErrorModalOpen, setIsErrorModalOpen]} />
    </>
  );
};

// ErrorModal에 에러메시지 전달하기
