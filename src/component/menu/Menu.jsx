import { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { IoChevronDownSharp } from "react-icons/io5";
import "./menu.css";
import Button from "../button/Button";
import NavImages from "../../assets/navLogo.png";

const Menu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="navbarMain" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">
          <Image src={NavImages} className="commonImage" />
        </Navbar.Brand>

        {/* Custom Hamburger Toggle */}
        <button
          className={`custom-toggler ${expanded ? "open" : ""}`}
          onClick={() => setExpanded((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto coustomNav">
            {["Home", "About", "Service", "Portfolio", "Price", "Blog"].map((item) => (
              <Nav.Link
                key={item}
                className="openSence boldPragraph"
                onClick={() => setExpanded(false)}
              >
                {item} <IoChevronDownSharp />
              </Nav.Link>
            ))}
          </Nav>

          <div className="contact-btn-wrapper">
            <Button onClick={() => setExpanded(false)}>Contact Us</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;