import styled from 'styled-components';
import Button from '../Common/Button';
import Wrapper from '../Common/Wrapper';

const Title = styled.h2`
  display: flex;
  justify-contents: left;
`;

const Input = styled.input`
  display: flex;
  width: 80%;
  margin: 5px 0 10px 0;
  border: none;
  border-bottom: 2px solid rgba(220, 220, 220, 1);
  padding: 10px 0px;

  &: focus {
    outline: none;
    border-bottom: 2px solid rgba(101, 88, 245, 1);
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  margin: 0px 0px 10px 0px;
  padding: 20px 0px 0px 0px;
`;

function Login() {
  return (
    <Wrapper>
      <Title>로그인</Title>
      <InputWrapper>
        <Input id="id" name="id" placeholder="아이디를 입력해주세요" />
        <Input id="password" name="password" placeholder="비밀번호를 입력해주세요" />
      </InputWrapper>
      <Button text="로그인하기" />
    </Wrapper>
  );
}

export default Login;
