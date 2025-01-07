import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: teal;
  color: white;
  font-size: 14px;
  font-weight: 400;
`;

export default function Announcement() {
  return <Container>Super Deal! Free Shpping On Orderes Over $50</Container>;
}
