import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant="dark"
      style={{ borderBottom: "2px solid #00FFFF" }}
    >
      <Container style={{ maxWidth: "1400px" }}>
        <Link
          to="/individual"
          style={{
            fontFamily: "'Cormorant SC', serif",
            color: "#00FFFF",
            fontSize: "1.8rem",
          }}
        >
          CF Profile Metrics
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link
              to="/individual"
              style={{
                width: "130.03px",
                fontSize: "18px",
                fontFamily: "'Cormorant SC', serif",
                color: "#00FFFF",
              }}
            >
              {" "}
              <BsPersonCircle style={{ marginRight: "4px" }} /> Individual
            </Link>
            <Link
              to="/compare"
              style={{
                width: "115.86",
                fontSize: "18px",
                fontFamily: "'Cormorant SC', serif",
                color: "#00FFFF",
              }}
            >
              {" "}
              <BsFillPersonPlusFill style={{ marginRight: "4px" }} />
              Compare
            </Link>
            <Link
              to="/contact"
              style={{
                width: "132.65px",
                fontSize: "18px",
                fontFamily: "'Cormorant SC', serif",
                color: "#00FFFF",
              }}
            >
              {" "}
              <IoIosMail style={{ marginRight: "4px", marginLeft: "7px" }} />
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
