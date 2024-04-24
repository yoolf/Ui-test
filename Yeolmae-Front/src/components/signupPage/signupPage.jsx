import styled from 'styled-components';
import Header from '../common/header';
import Button from '../common/button';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 50px auto;
  min-height: 80vh;
  max-width: 60vh;
  height: 60%;
  box-shadow: rgba(100, 100, 100, 0.2) 0px 0px 29px 0px;
  border-radius: 30px;
`;

function Signup() {
  return (
    <>
      <Header />
      <Wrapper>
        <div>Signup</div>
        <Button text="가입하기" />
      </Wrapper>
    </>
  );
}

export default Signup;
