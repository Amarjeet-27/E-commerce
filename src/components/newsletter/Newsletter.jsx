import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf5f5;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 18px;
`;
const Desc = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 2px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" type="email" />
        <Button>
          <i class="fa-solid fa-paper-plane-top">hue</i>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
