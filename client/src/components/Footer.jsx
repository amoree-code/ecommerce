import styled from "styled-components";
import { ImFacebook2 } from "react-icons/im";
import {
  FaInstagramSquare,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#c3bfbf" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          blanditiis, ullam nam aut dolores sit voluptatum eligendi tempora
          quia! Ab quaerat temporibus, similique eaque quod facilis sapiente
          quae cum
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <ImFacebook2 />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <FaInstagramSquare />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <FaTwitterSquare />
          </SocialIcon>
          <SocialIcon color="E60023">
            <FaPinterestSquare />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Wowman Fashion</ListItem>
          <ListItem>Accessorise</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaMapMarkerAlt style={{ marginRight: "10px" }} /> 622 Dixie Path ,
          Sounth Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt style={{ marginRight: "10px" }} /> 1-996-949-1555 x64232
        </ContactItem>
        <ContactItem>
          <IoMdMail style={{ marginRight: "10px" }} /> amoreesicko@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
}
