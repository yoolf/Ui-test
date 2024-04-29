import styled from 'styled-components';
import Button from '../common/Button';
import Wrapper from '../common/Wrapper';
import InputField from '../common/InputField';

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
    <Wrapper>
      <Title>회원가입하기</Title>
      <InputWrapper>인풋필드</InputWrapper>
      <Button text="가입하기" />
    </Wrapper>
  );
}

export default Signup;
