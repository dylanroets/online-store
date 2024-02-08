import './Checkout.css';

function Checkout() {
  // Dummy data for the shopping cart
  const cartItems = [
    { id: 1, name: "Item 1", price: 10.99 },
    { id: 2, name: "Item 2", price: 15.99 },
    { id: 3, name: "Item 3", price: 20.49 },
  ];

  //Checkout adding totals
  //Eventually needs to be a POST to DB
  const handleCheckout = ()=> {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    alert(`Total amount to be paid: $${totalPrice}`);
  }

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span className="item-name">{item.name}</span>
            <span className="item-price">${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <span>Total: </span>
        <span>
          ${cartItems.reduce((total, item) => total + item.price, 0)}
        </span>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Checkout;