import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cKQRJkP5SoEjKLSCOG46FjLKcN8xquXisg&s"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            kenz restuarant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
