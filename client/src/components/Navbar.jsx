import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgrey;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  color:black;
`;

const Right = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Span = styled.span`
  position: absolute;
  top: -15px;
  right: -14px;
  background-color: teal;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const handleClick = () => {
    if (user) {
      localStorage.removeItem("user");
      window.location.reload();
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <IoSearchSharp style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Logo>LAMA.</Logo>
          </Link>
        </Center>
        <Right>
          {user ? (
            <p onClick={handleClick} style={{ cursor: "pointer" }}>
              LOG OUT
            </p>
          ) : (
            <MenuItem>REGISTER</MenuItem>
          )}
          {user ? <p></p> : <MenuItem>SIGN IN</MenuItem>}
          <Link to={"/cart"}>
            <MenuItem>
              <RiShoppingCart2Line></RiShoppingCart2Line>
            </MenuItem>
            <Span>{quantity}</Span>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}
