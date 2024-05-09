import styled, { css } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../Common/Button';
import Wrapper from '../Common/Wrapper';

const Title = styled.h2`
  display: flex;
  justify-contents: left;
  font-size: 25px;
`;
const Input = styled.input`
  display: flex;
  width: 80%;
  margin: 5px 0 10px 0;
  border: none;
  border-bottom: 2px solid rgba(220, 220, 220, 1);
  padding: 10px 0px;
  font-family: NotoSans Regular;

  &: focus {
    outline: none;
    border-bottom: 2px solid rgba(101, 88, 245, 1);
  }
`;

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  margin: 10px 0px 10px 0px;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  background-color: white;
`;

const TitleLabel = styled.label`
  // flex-grow: 0;
  // flex-shrink: 0;
  flex-basis: 80px;
`;
const ContentsLabel = styled.label`
  // flex-grow: 0;
  // flex-shrink: 0;
  flex-basis: 160px;
`;

function Signup() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: '',
    password: '',
    name: ''
  });

  const navigate = useNavigate();
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const [idValid, setIDValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const HandlerID = (e) => {
    setInput(e.target.value);
    const IDRegex = /^[a-z0-9A-Z_.]{2,16}$/;
    if (IDRegex.test('id')) {
      setIDValid(true);
    } else {
      setIDValid(false);
    }
  };
  const HandlerPassword = (e) => {
    setInput(e.target.value);
    const PasswordRegex = /^[A-Za-z0-9]{6,}$/;
    if (PasswordRegex.test('password')) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  /* const IDAvailability = async () => {
    try {
      const response = await fetch(' //TODO ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (result.available) {
        alert('사용 가능한 아이디입니다.');
        setIDValid(true);
      } else {
        alert('사용 불가능한 아이디입니다.');
        setIDValid(false);
      }
    } catch (error) {
      console.error('아이디 검사 중 오류 발생:', error);
    }
  }; */

  const API = 'https://879df4a7-14ca-442b-a753-788449ea4109.mock.pstmn.io/api/v1/signup';
  const handleSubmit = (e) => {
    e.preventDefault();
    /* if (!input.id) {
      return window.alert('ID를 입력해주세요.');
    }
    if (!input.password) {
      return alert('비밀번호를 입력해주세요.');
    } */
    const body = {
      id: input.id,
      password: input.password,
      name: input.name
    };

    axios
      .post(API, body)
      .then((res) => {
        // const { accessToken } = res.data;
        // if (accessToken) {
        //   localStorage.setItem('accessToken', accessToken);
        // }
        console.log(input);
        console.log(res.data);
        // console.log(res);
        if (res.status === 200) {
          console.log('회원가입 성공');
        }
      })
      .catch((err) => {
        console.log(input);
        console.error(err.response);
        if (err.response.status === 400) {
          alert('회원가입에 실패하였습니다.');
        }
      });
  };

  return (
    <Wrapper>
      <Title>회원가입하기</Title>
      <InputWrapper>
        <InputContainer>
          <TitleLabel>아이디</TitleLabel>
          <ContentsLabel>
            <Input id="id" name="id" type="form" onChange={HandlerID} />
          </ContentsLabel>
          <Button text="중복확인" />
          {/* <Input name="id" type="button" text="중복확인">
              중복확인 */}
        </InputContainer>
        <InputContainer>
          <TitleLabel>비밀번호</TitleLabel>
          <ContentsLabel>
            <Input
              id="password"
              name="password"
              type="form"
              // value={password}
              onChange={HandlerPassword}
            />
          </ContentsLabel>
        </InputContainer>
        <InputContainer>
          <TitleLabel>이름</TitleLabel>
          <ContentsLabel>
            <Input
              id="name"
              name="name"
              type="form"
              // value={name}
              onChange={(e) => setInput(e.target.value)}
            />
          </ContentsLabel>
        </InputContainer>
      </InputWrapper>
      <Button onClick={handleSubmit} text="가입하기" />
    </Wrapper>
  );
}

export default Signup;
