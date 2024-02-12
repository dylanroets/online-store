import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { useState } from "react";

function Checkout({ cartItems }) {
  // Function to calculate total price
  const calculateTotalPrice = () => {
    const totalPrice = cartItems
      .reduce((total, item) => {
        const price =
          item.price === 0 ? Math.random() * (10 - 5) + 5 : item.price;
        return total + price;
      }, 0)
      .toFixed(2);
    return totalPrice;
  };

  // State to store total price
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  // Function to handle checkout
  const handleCheckout = () => {
    const totalPrice = calculateTotalPrice();
    setTotalPrice(totalPrice);
    alert(`Total amount to be paid: $${totalPrice}`);
  };

  return (
    <>
      <main>
        <Container className="pb-5" fluid>
          {/*Displaying Items in the Cart*/}
          <Row className="pb-5 pt-5 px-3 my-3 justify-content-center">
            <Col className="ck-cart-border" sm={8}>
              <h1>Shopping Cart</h1>
              <hr />
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div class="row">
                      {/* Item Image */}
                      <div class="col-2">
                        <span>
                          <img class="ck-cart-image" src={item.image} />
                        </span>
                      </div>

                      {/*Item Brand and Title */}
                      <div class="col-7 mt-4">
                        <span class="">{item.brand} </span>
                        <span class="">{item.title}</span>
                      </div>

                      {/*Item Price */}
                      <div class="col-2 mt-4">
                        {/* For items without a price from the API random number generate a price */}
                        <span class="fw-medium text-danger">
                          $
                          {item.price === 0
                            ? (Math.random() * (5 - 1) + 5).toFixed(2)
                            : item.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Delete Icon */}
                      <div class="col-1 mt-4">
                        <img
                          class="ck-cart-icon-bin"
                          src="../images/ck-icon-bin.png"
                        />
                      </div>
                    </div>

                    <br />
                    <hr class="ck-cart-hr" />
                  </li>
                ))}
              </ul>
            </Col>

            {/*Cart - Showing Total Item Prices*/}
            <Col sm={4}>
              <Card style={{ width: "23rem" }}>
                <Card.Body className="pt-3">
                  <Card.Text>
                    <span>Subtotal: ${totalPrice}</span>
                    <span></span>
                  </Card.Text>
                  <hr />
                  <Card.Text className="">
                    {/* Calculating just MN state tax */}
                    <span>
                      Estimated Tax: ${(totalPrice * 0.08375).toFixed(2)}
                    </span>
                    <span></span>
                  </Card.Text>
                  <hr />
                  {/* Estimated total is total price plus tax */}
                  <Card.Text className="">
                    <span class="ck-cart-text">Estimated Total: </span>
                    <span class="ck-cart-text">
                      $
                      {(
                        parseFloat(totalPrice) +
                        parseFloat(totalPrice) * 0.08375
                      ).toFixed(2)}
                    </span>
                  </Card.Text>

                  <Card.Text className="ck-cart-text-policy text-center">
                    *These prices are for online orders only and do not apply to
                    in-store purchases. The Estimated totals are subject to
                    change due to weight and availability.
                  </Card.Text>

                  <div className="pt-2 d-grid gap-2">
                    <Button
                      variant="outline-dark"
                      size="lg"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </Button>
                    <Button
                      variant="outline-warning"
                      size="lg"
                      onClick={handleCheckout}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              
              {/* Promo code entry form */}
              <div class="align-items-center pt-5">
                <p>
                  Promo Code{" "}
                  <span class="fw-light text-secondary">(optional)</span>
                </p>
                <Form inline>
                  <Row>
                    <Col sm={9}>
                      <Form.Control type="text" className=" mr-sm-2" />
                    </Col>
                    <Col sm={3}>
                      <Button variant="secondary" size="md" type="submit">
                        Apply
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Checkout;
