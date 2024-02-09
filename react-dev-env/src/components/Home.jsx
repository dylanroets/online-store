import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";


function Home({ addToCart }) {

  //Adding items to the cart from the search results
    const [addedItems, setAddedItems] = useState([]);

    const handleAddToCart = (product) => {
      addToCart(product);
      console.log("This is the product added to checkout", product);
      setAddedItems([...addedItems, product]);
    };

  //Search Query GET from the API
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    //API KEY
    const apiKey = import.meta.env.VITE_MY_SPOONACULAR_API_KEY;
    //API URL
    const apiUrl = `https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&query=${searchQuery}&number=3&addProductInformation=True`;
    
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
        <div class="container-fluid d-flex align-items-center justify-content-evenly text-end home-head-image">
          <div class="">
            <h1 class="home-head-text">Fresh and Organic</h1>
            <h3 class="home-head-text">Lorem Ipsum Dolor!</h3>
          </div>
        </div>

        <Container>
          <Row className="px-4 my-5">
            <Col sm>
              <h1 class="pb-3 text-center">Search Entire Store for Product</h1>
              {/* Search Bar using the API */}
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
                    <Button type="submit">Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          {/* Search Results Mapping */}
          <Row className="px-4 my-5">
            {searchResults &&
              searchResults.products &&
              searchResults.products.map((product) => (
                <Col sm={3} key={product.id}>
                  <Card style={{ width: "12rem" }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title className="pb-2 text-center">
                        {product.title}
                      </Card.Title>
                      <div className="d-grid gap-2">
                        <Button
                          className=""
                          variant="success"
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

          <Row className="px-4 my-5">
            <h1 class="pb-4">This Week's Sale</h1>

            <Col sm>
              <Card border="" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title className="text-danger text-center" as="h4">
                    $0.79/each
                  </Card.Title>
                  <Card.Text className="text-center">Hass Avocados</Card.Text>

                  <div className="d-grid gap-2">
                    <Button className="" variant="success" size="md">
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title className="text-danger text-center" as="h4">
                    $1.99/lb
                  </Card.Title>
                  <Card.Text className="text-center">
                    Boneless Chicken
                  </Card.Text>
                  <div className="d-grid gap-2">
                    <Button className="" variant="success" size="md">
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title className="text-danger text-center" as="h4">
                    $2.99/each.
                  </Card.Title>
                  <Card.Text className="text-center">
                    Whole Grain Bread
                  </Card.Text>
                  <div className="d-grid gap-2">
                    <Button className="" variant="success" size="md">
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="px-4 my-5">
            <h1 class="pb-4">Products</h1>

            <Col sm={3}>
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title className="pb-2 text-center">Dairy</Card.Title>

                  <div className="d-grid gap-2">
                    <Button className="" variant="success" size="md">
                      Shop Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={3}>
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title className="pb-2 text-center">Meat</Card.Title>

                  <div className="d-grid gap-2">
                    <Button className="" variant="success" size="md">
                      Shop Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={3}>
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title className="pb-2 text-center">
                    Beverages
                  </Card.Title>

                  <div className="d-grid gap-2">
                    <Button className="" variant="success" size="md">
                      Shop Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={3}>
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title className="pb-2 text-center">Meat</Card.Title>

                  <div className="d-grid gap-2">
                    <Button className="" variant="success" size="md">
                      Shop Now
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
