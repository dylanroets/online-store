import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <Container fluid>
      <div id="home-image"></div>
      <h1></h1>
      <Row>
        <Col>
          <h1>SEARCH BOX</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>CATEGORIES</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
