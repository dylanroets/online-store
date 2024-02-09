import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";

function Checkout({ cartItems }) {
  //Checkout adding totals
  //Eventually needs to be a POST to DB
  const handleCheckout = () => {
    const totalPrice = cartItems
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
    alert(`Total amount to be paid: $${totalPrice}`);
  };

  return (
    <>
      <main>
        <Container className="pb-5" fluid>
          <Row className="pb-5 pt-5 px-3 my-3 justify-content-center">
            <Col sm={8}>
              <h1>Shopping Cart</h1>
              <hr />
              <ul>
                {cartItems.map((item) => (
                  <li class="" key={item.id}>
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${item.price}</span>
                    <hr />
                  </li>
                ))}
              </ul>
            </Col>

            <Col sm={4}>
              <Card style={{ width: "23rem" }}>
                <Card.Body className="pt-3">
                  <Card.Text className="">
                    <span>Subtotal: </span>
                  </Card.Text>
                  <hr />
                  <Card.Text className="">
                    <span>Estimated Tax: </span>
                  </Card.Text>
                  <hr />
                  <Card.Text className="">
                    <span class="">Estimated Total: </span>
                    <span>
                      $
                      {cartItems
                        .reduce((total, item) => total + item.price, 0)
                        .toFixed(2)}
                    </span>
                  </Card.Text>
                  <br />

                  <Card.Text className="text-center">
                    *These prices are for online orders only and do not apply to
                    in-store purchases.
                  </Card.Text>

                  <div className="pt-2 d-grid gap-2">
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="lg"
                      onClick={handleCheckout}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Checkout;
