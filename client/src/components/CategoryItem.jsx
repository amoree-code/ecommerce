import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  flex: 1;
  height: 80vh;
  margin: 3px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: " 30vh" })}
`;

const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Title = styled.h1`
  color: white;
  margin: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

export default function CategoryItem({ it }) {
  return (
    <Container key={it.id}>
      <Link to={`/products/${it.cat}`}>
        <Image src={it.img} />
        <Info>
          <Title>{it.title}</Title>
          <Button>SHOP NEW</Button>
        </Info>
      </Link>
    </Container>
  );
}
