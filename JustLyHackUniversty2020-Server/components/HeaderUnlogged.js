import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Link from 'next/link';

const HeaderUnlogged = () =>{
  return(
        <Navbar style={{'background-color': '#28A746'}} expand="lg" sticky="top">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="#App">
                  <Link href="/index">
                    <h2 className = "text-light"><strong>Легко!</strong></h2>
                  </Link>
                </Navbar.Brand>
                <ButtonGroup aria-label="Basic example">
                  <Link href="/signIn">
                    <Button name="login-btn-header" className="btn-light">Войти</Button>
                  </Link>
                  <Link href="/signUp">
                    <Button href="#App" name="register-btn-header" className="btn-light">Регистрация</Button>
                  </Link>
                </ButtonGroup>
            </Container>
        </Navbar>
  );
}

export default HeaderUnlogged;
