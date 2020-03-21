import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Link from 'next/link';



const HeaderLogged = () =>{
  return(
        <Navbar style={{'background-color': '#28A746'}} expand="lg" sticky="top">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="#App">
                  <Link href="/index">
                    <h2 className = "text-light"><strong>Легко!</strong></h2>
                  </Link>
                </Navbar.Brand>
                <Link href="/profile">
                  <a><h3 className = 'text-light'>Личный кабинет</h3></a>
                </Link>
            </Container>
        </Navbar>
  );
}

export default HeaderLogged;
