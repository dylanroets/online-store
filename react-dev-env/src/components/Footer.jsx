import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Footer() {
  return (
    <>
      <footer class="pt-5">
        <Row className="pb-4">
          <Col sm={6}>
            <img class="footer-logo" src="../images/food.png" />
          </Col>

          <Col sm={6}>
            <p class="footer-text">About Us</p>
            <p class="footer-text">Store Hours</p>
            <p class="footer-text">Customer Servive</p>
          </Col>
        </Row>
        <hr class="footer-hr" />
        <p class="footer-tm-text">© 2024 Nano_Bacon™</p>
      </footer>
    </>
  );
}

export default Footer;
