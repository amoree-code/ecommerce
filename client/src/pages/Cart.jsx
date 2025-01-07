import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { IoAdd, IoRemoveOutline } from "react-icons/io5";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Buttom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

const Image = styled.img`
  width: 200px;
  margin-right: 10px;
`;

const Details = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

const ProductAmmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const ProductAmmount = styled.div`
  flex: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 8px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>shopping Bag(2)</TopText>
            <TopText>your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Buttom>
          <Info>
            {cart.products.map((p) => (
              <Product>
                <ProductDetail>
                  <Image src={p.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {p.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {p._id}
                    </ProductId>
                    <ProductColor color={p.color} />
                    <ProductSize>
                      <b>Size:</b> {p.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmmountContainer>
                    <IoAdd />
                    <ProductAmmount>{p.quantity}</ProductAmmount>
                    <IoRemoveOutline />
                  </ProductAmmountContainer>
                  <ProductPrice>${p.price * p.quantity}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMRAY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice> ${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estmaited Spipping</SummaryItemText>
              <SummaryItemPrice> $5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Spipping Discount</SummaryItemText>
              <SummaryItemPrice> $ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice> ${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>Chickout Now</Button>
          </Summary>
        </Buttom>
      </Wrapper>
      <Footer />
    </Container>
  );
}
