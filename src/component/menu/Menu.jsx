import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { IoChevronDownSharp } from "react-icons/io5";
import "./menu.css";
import Button from "../button/Button";
import NavImages from "../../assets/navLogo.png";
 
const Menu = () => {
  return (
    <Navbar expand="lg" className="navbarMain">
      <Container>
        <Navbar.Brand>
          
          <Image src={NavImages} className="commonImage" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto coustomNav">
            <Nav.Link className="openSence boldPragraph">
              Home <IoChevronDownSharp />
            </Nav.Link>
            <Nav.Link className="openSence boldPragraph">
              About <IoChevronDownSharp />
            </Nav.Link>
            <Nav.Link className="openSence boldPragraph">
              Service <IoChevronDownSharp />
            </Nav.Link>
            <Nav.Link className="openSence boldPragraph">
              Portfolio
              <IoChevronDownSharp />
            </Nav.Link>
            <Nav.Link className="openSence boldPragraph">
              Price <IoChevronDownSharp />
            </Nav.Link>
            <Nav.Link className="openSence boldPragraph">
              Blog <IoChevronDownSharp />
            </Nav.Link>
          </Nav>
          <Button
            children={"Contact Us"}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
