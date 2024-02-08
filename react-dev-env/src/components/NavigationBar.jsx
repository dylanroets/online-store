import NavigationItem from "./NavigationItem";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  const navigation = [
    { title: "Home", link: "home" },
    { title: "Product", link: "product" },
    { title: "Checkout", link: "checkout" },
  ];

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav>
            {navigation.map((navItem, index) => (
              <NavigationItem
                key={index}
                link={navItem.link}
                title={navItem.title}
              />
            ))}
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
