import NavigationItem from "./NavigationItem";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  const navigation = [
    { title: "Home", link: "Home" },
    { title: "Product", link: "Product" },
    { title: "Checkout", link: "Checkout" },
    { title: "Result", link: "Result" },
  ];

  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
        <Container className="">
          <Navbar.Brand href="">
            <img class="nav-store-logo" src="../images/food.png" />
          </Navbar.Brand>
          <Nav className="me-auto">
            {navigation.map((navItem, index) => (
              <NavigationItem
                key={index}
                link={navItem.link}
                title={navItem.title}
              />
            ))}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
