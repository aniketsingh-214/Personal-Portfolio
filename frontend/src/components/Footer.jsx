import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aniketsingh214"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/aniketsingh-214"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://leetcode.com/u/BT21CSE214/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Developed by Aniket Singh - 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
