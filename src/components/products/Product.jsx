import React from "react";
import styled from "styled-components";

const Info = styled.div`
  opacity:0;
  width: 100%;
  height: 100%;
  position:absolute;
  top=0;
  left=0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  transition: all 1s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  align-items: center;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Icons = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icons>
          <i class="fa-regular fa-cart-shopping"></i>
        </Icons>
        <Icons>
          <i class="fa-light fa-magnifying-glass"></i>
        </Icons>
        <Icons>
          <i class="fa-light fa-heart"></i>
        </Icons>
      </Info>
    </Container>
  );
};

export default Product;
