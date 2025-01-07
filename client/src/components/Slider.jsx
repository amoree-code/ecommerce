import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { silderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: #aba6ab;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.sildeIndex * -100}vw);
  transition: all 1s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 3px;
  width: 80%;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export default function Slider() {
  const [sildeIndex, setSildeIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSildeIndex(sildeIndex > 0 ? sildeIndex - 1 : 2);
    } else {
      setSildeIndex(sildeIndex < 2 ? sildeIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <IoIosArrowBack />
      </Arrow>
      <Wrapper sildeIndex={sildeIndex}>
        {silderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title} </Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <IoIosArrowForward />
      </Arrow>
    </Container>
  );
}
