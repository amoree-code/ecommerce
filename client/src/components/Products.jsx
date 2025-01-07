import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "0px" })}
`;

export default function Products({ cat, filters, sort }) {
  const [proudcts, setProudcts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category${cat}`
            : "http://localhost:5000/api/products"
        );
        setProudcts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setfilteredProducts(
        proudcts.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, proudcts]);
  console.log(cat);

  useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((it) => <Product it={it} key={it.id} />)
        : proudcts.slice(0, 8).map((it) => <Product it={it} key={it.id} />)}
    </Container>
  );
}
