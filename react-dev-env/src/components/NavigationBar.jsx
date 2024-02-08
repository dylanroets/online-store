import NavigationItem from "./NavigationItem";

function NavigationBar() {
  const navigation = [
    { title: "Home", link: "home" },
    { title: "Product", link: "product" },
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
