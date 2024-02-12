import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function Home({ addToCart }) {
  //Adding items to the cart from the search results
  const [addedItems, setAddedItems] = useState([]);
 
  const handleAddToCart = (product) => {
    addToCart(product);
    console.log("This is the product added to checkout", product);
    setAddedItems([...addedItems, product]);
  };

  // Modal and further item discription
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // opening modal
  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  // closing modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  //Search Query GET from the API
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    //API KEY
    const apiKey = import.meta.env.VITE_MY_SPOONACULAR_API_KEY;
    //API URL
    const apiUrl = `https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&query=${searchQuery}&number=4&addProductInformation=True`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSearchResults(data);
      console.log("Here's the data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <main>
        {/* Header Image Cover */}
        <div class="container-fluid d-flex align-items-center justify-content-evenly text-end home-head-image">
          <div class="">
            <h1 class="home-head-text">SIMPLY DELICIOUS</h1>
            <h4 class="home-head-text">We supply high quality products</h4>
            <div class="pt-2 home-head-button">
              <button class="btn btn-warning btn-lg" type="button">
                Shop now
              </button>
            </div>
          </div>
        </div>

        <Container>
          {/* Category for the Products */}
          <Row className="pt-5">
            <p class="text-primary">Shop by</p>
            <h3 class="pb-3">Category</h3>

            <Col sm={3}>
              <Card border="light" style={{ width: "10rem" }}>
                <Card.Img variant="top" src="../images/drinks.png" />
                <Card.Body>
                  <Card.Title className="pb-2 text-center">
                    Beverages
                  </Card.Title>

                  <div className="d-grid gap-2">
                    <Button className="" variant="dark" size="md">
                      Shop Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={3}>
              <Card border="light" style={{ width: "10rem" }}>
                <Card.Img variant="top" src="../images/healthy-food.png" />
                <Card.Body>
                  <Card.Title className="pb-2 text-center">Produce</Card.Title>

                  <div className="d-grid gap-2">
                    <Button className="" variant="dark" size="md">
                      Shop Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={3}>
              <Card border="light" style={{ width: "10rem" }}>
                <Card.Img variant="top" src="../images/meat.png" />
                <Card.Body>
                  <Card.Title className="pb-2 text-center">Meat</Card.Title>

                  <div className="d-grid gap-2">
                    <Button className="" variant="dark" size="md">
                      Shop Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={3}>
              <Card border="light" style={{ width: "10rem" }}>
                <Card.Img variant="top" src="../images/snack.png" />
                <Card.Body>
                  <Card.Title className="pb-2 text-center">Snacks</Card.Title>

                  <div className="d-grid gap-2">
                    <Button className="" variant="dark" size="md">
                      Shop Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          {/* Search Bar using the API */}
          <Row className="pt-5 px-4 my-5">
            <Col sm>
              <h3 class="pb-3">Search Entire Store for a Product</h3>

              <Form inline onSubmit={handleSearchSubmit}>
                <Row>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </Col>
                  <Col sm={2}>
                    <Button variant="dark" size="md" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

          {/* Search Results Mapping */}
          <Row className="pb-5 px-4 my-5">
            {searchResults &&
              searchResults.products &&
              searchResults.products.map((product) => (
                <Col sm={3} key={product.id}>
                  <Card style={{ width: "14rem" }}>
                    <Card.Img
                      className="home-card-image"
                      variant="top"
                      src={product.image}
                      onClick={() => handleShowModal(product)} // Show modal when button is clicked
                    />
                    <Card.Body>
                      {/* Truncated to just two lines for the descrioption */}
                      <Card.Title className="pb-2 text-center custom-text-truncate">
                        {product.title}
                      </Card.Title>

                      <div className="d-grid gap-2">
                        <Button
                          variant="dark"
                          size="md"
                          onClick={() => handleAddToCart(product)} //Product being passed to Checkout Cart
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
          {/* Modal for the item desciption once clicked image */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedProduct && selectedProduct.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedProduct && (
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  />
                  <p>Description: {selectedProduct.description}</p>
                  {/* Add more details or information here */}
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          
          <hr />
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedProduct && selectedProduct.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedProduct && (
                <>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  />
                  <p>Description: {selectedProduct.description}</p>
                  {/* Add more details or information here */}
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Featured Products */}
          <Row className="pt-1 pb-5 px-4 my-5">
            <h3 class="pb-4">This Week's Sale</h3>

            <Col sm>
              <Card border="" style={{ width: "18rem" }}>
                <Card.Img
                  className="home-card-image"
                  variant="top"
                  src="../images/strawberry-sale.jpg"
                />
                <Card.Body>
                  <Card.Title className="text-danger text-center" as="h4">
                    $5.99/each
                  </Card.Title>
                  <Card.Text className="text-center">
                    Organic Strawberries
                  </Card.Text>

                  <div className="d-grid gap-2">
                    <Button className="" variant="dark" size="md">
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="home-card-image"
                  variant="top"
                  src="../images/chicken-sale.jpg"
                />
                <Card.Body>
                  <Card.Title className="text-danger text-center" as="h4">
                    $1.99/lb
                  </Card.Title>
                  <Card.Text className="text-center">
                    Boneless Chicken
                  </Card.Text>
                  <div className="d-grid gap-2">
                    <Button className="" variant="dark" size="md">
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="home-card-image"
                  variant="top"
                  src="../images/bread-sale.jpg"
                />
                <Card.Body>
                  <Card.Title className="text-danger text-center" as="h4">
                    $2.99/each.
                  </Card.Title>
                  <Card.Text className="text-center">
                    Whole Grain Bread
                  </Card.Text>
                  <div className="d-grid gap-2">
                    <Button className="" variant="dark" size="md">
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Home;
