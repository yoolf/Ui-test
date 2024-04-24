import styled from 'styled-components';
import Header from '../common/header';
import Button from '../common/button';
import InputField from '../common/inputField';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: 50px auto;
  padding: 0px 30px;
  min-height: 70vh;
  max-width: 50vh;
  height: 60%;
  box-shadow: rgba(100, 100, 100, 0.2) 0px 0px 29px 0px;
  border-radius: 30px;
`;
const InputWrapper = styled.div`
  display: flex;
  min-height: 40vh;
  margin: 0px 0px 10px 0px;
`;

const Title = styled.h2`
  justify-contents: left;
`;

function Signup() {
  return (
    <>
      <Header />
      <Wrapper>
        <Title>회원가입하기</Title>
        <InputWrapper>인풋필드</InputWrapper>
        <Button text="가입하기" />
      </Wrapper>
    </>
  );
}

export default Signup;
