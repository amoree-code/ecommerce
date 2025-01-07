import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "40px" })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Internal Assurance Strategist Central.</Desc>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <IoMdSend />
        </Button>
      </InputContainer>
    </Container>
  );
}
