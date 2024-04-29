import styled from 'styled-components';
import Button from '../Common/Button';
import Wrapper from '../Common/Wrapper';
import InputField from '../Common/InputField';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  margin: 0px 0px 10px 0px;
  padding: 20px 0px 0px 0px;
`;

const Title = styled.h2`
  justify-contents: left;
`;

function Signup() {
  return (
    <Wrapper>
      <Title>회원가입하기</Title>
      <InputWrapper>인풋필드</InputWrapper>
      <Button text="가입하기" />
    </Wrapper>
  );
}

export default Signup;
