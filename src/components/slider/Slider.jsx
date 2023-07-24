import React, { useState } from "react";
// import "./slider.scss";
import styled from "styled-components";
import { sliderItems } from "../../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  background-color: gray;
  text-color: black;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const Imgcontainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 70%;
`;
const Infocontainer = styled.div`
  flex: 1;
  padding: 4rem;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [sliderIndex, setSlideIndex] = useState(0);

  function handleclick(dir) {
    if (dir === "left") {
      setSlideIndex(sliderIndex > 0 ? sliderIndex - 1 : 3);
    } else {
      setSlideIndex(sliderIndex < 3 ? sliderIndex + 1 : 0);
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleclick("left")}>
        <i className="fa-solid fa-arrow-left leftarrow" />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <Imgcontainer>
              <Image src={item.img} />
            </Imgcontainer>
            <Infocontainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </Infocontainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleclick("right")}>
        <i class="fa-solid fa-arrow-right " />
      </Arrow>
    </Container>
  );
};

export default Slider;
