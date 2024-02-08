import { useState } from "react";

function Product({ addToCart }) {

  const [addedItems, setAddedItems] = useState([])
  
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems([...addedItems, product]);
  };

  return (
    <>
      <h1>Product Page! :D</h1>
        <button
          onClick={() => handleAddToCart({ id: 1, name: "Donut", price: 10.99 })}
        >
          Add Donut to Cart
        </button>
        <button
          onClick={() => handleAddToCart({ id: 2, name: "Carrot", price: 15.99 })}
        >
          Add Carrot to Cart
        </button>
        <button
          onClick={() => handleAddToCart({ id: 3, name: "Banana", price: 20.49 })}
        >
          Add Banana to Cart
        </button>
      <div>
          <h2>Items Added to Cart:</h2>
            <ul>
              {addedItems.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
      </div>
      
    </>
  );
}

export default Product;