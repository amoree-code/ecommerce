import styled from "styled-components";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.2);
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  background-color: #f5f7fa;

  &:hover ${Info} {
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 75%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
    transition: all 0.5s ease;
  }
`;

export default function Product({ it }) {
  return (
    <Container>
      <Circle />
      <Image src={it.img} />
      <Info>
        <Icon>
          <RiShoppingCart2Line />
        </Icon>
        <Icon>
          <Link to={`product/${it._id}`}>
            <IoSearchSharp />
          </Link>
        </Icon>
        <Icon>
          <FaRegHeart />
        </Icon>
      </Info>
    </Container>
  );
}
