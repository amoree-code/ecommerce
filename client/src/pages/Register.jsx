import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { register } from "../redux/apiCalls";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/static/media/background2.0c17bafb0c104ebddd15.jpg") center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: auto 10px;
`;

export default function Register() {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    register(dispatch, { name, lastname, username, email, password, confirm });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="name" onChange={(e) => setname(e.target.value)} />
          <Input
            placeholder="last name"
            onChange={(e) => setlastname(e.target.value)}
          />
          <Input
            placeholder="username"
            onChange={(e) => setusername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <Input
            placeholder="confirm Password"
            onChange={(e) => setconfirm(e.target.value)}
          />

          <Agreement>
            By Createing an account, I consent to the process of my perosonal
            data in accorder with the <b>PRIVACY POLICY </b>
            <hr className="hr" />
            <Link to={"/login"} className="linkLoginRegister">
              LOG IN
            </Link>
          </Agreement>
          <Button onClick={handleLogin}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
