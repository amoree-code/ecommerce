import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;

  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export default function Categorise() {
  return (
    <Container>
      {categories.map((it) => (
        <CategoryItem it={it} key={it.id} />
      ))}
    </Container>
  );
}
