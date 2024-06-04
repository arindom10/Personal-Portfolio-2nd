import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/AK.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/arindom-kundu-402277184/"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100009552123285"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a target="_blank" href="https://github.com/arindom10">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p> 2024 Copyright By Arindom Kundu . All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
