import NavigationItem from "./NavigationItem";

function NavigationBar() {
  const navigation = [
    { title: "Home", link: "home" },
    { title: "Product", link: "product" },
    { title: "Checkout", link: "checkout" },
  ];
  return (
    <nav>
      <ul>
        {navigation.map((navItem, index) => (
          <NavigationItem
            key={index}
            link={navItem.link}
            title={navItem.title}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
