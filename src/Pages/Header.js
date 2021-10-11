import React, { useEffect } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Header() {
  // let history = useHistory();
  const logoutF=()=>{
      localStorage.setItem("login","false")
      return  window.location.href="http://localhost:3000/login"
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {(() => {
              if (localStorage.getItem("login") != "true") {
                return (
                  <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">signup</Nav.Link>
                  </>
                );
              } else {
                return  <Nav.Link onClick={logoutF}>logout</Nav.Link>
             
                
                }
            })()}

          </Nav>
        </Container>
      </Navbar>
    </>

    // <div className=" border">
    //     <Row>
    //         <Col md="8" className="" >
    //             <div className="pl-4">Heading</div>
    //         </Col>
    //         <Col md="2">
    //             <a href="/login">Login</a>
    //         </Col>
    //         <Col md="2">
    //         <a href="/signup"> Signup</a>
    //         </Col>
    //     </Row>
    // </div>
  );
}

export default Header;
