import React, { useState } from "react";
import Productcard from "./Productcard";
import "./App.css";

function App() {
  const data = [
    {
      productImage:
        "https://img.freepik.com/premium-photo/white-modern-smart-watch-mockup-with-strap-white-background-3d-rendering_476612-18565.jpg?size=626&ext=jpg&ga=GA1.1.593219929.1699108181&semt=ais",
      productName: "Fancy item",
      productPrice: "$75.00 - 85.00",
    },
    {
      productImage:
        "https://img.freepik.com/premium-photo/4k-monitor-isolated-white_93200-1487.jpg?size=626&ext=jpg&ga=GA1.1.593219929.1699108181&semt=sph",
      productName: "Special Item",
      productPrice: "$60.00",
    },
    {
      productImage:
        "https://img.freepik.com/free-photo/shoes_1203-8153.jpg?size=626&ext=jpg&ga=GA1.1.593219929.1699108181&semt=sph",
      productName: "Sale Item",
      productPrice: "75.00- 85.00",
    },
    {
      productImage:
        "https://img.freepik.com/free-vector/headphones-wireless-realistic-composition-with-isolated-image-phones-with-power-bank-dock-station-with-reflections-vector-illustration_1284-73201.jpg?size=626&ext=jpg&ga=GA1.1.593219929.1699108181&semt=sph",
      productName: "Popular Item",
      productPrice: "30.00 - 65.00",
    },
    {
      productImage:
        "https://img.freepik.com/free-photo/men-s-formal-wear-collection_53876-16559.jpg?size=626&ext=jpg&ga=GA1.1.593219929.1699108181&semt=sph",
      productName: "Popular Item",
      productPrice: "75.00 - 85.00",
    },
    {
      productImage:
        "https://img.freepik.com/premium-photo/mobile-phone-isolated-white-background-with-sample-app-icons-back-view-with-camera-lenses_746318-511.jpg?size=626&ext=jpg&ga=GA1.1.593219929.1699108181&semt=ais",
      productName: "Expensive Item",
      productPrice: "130.00 - 185.00",
    },
    {
      productImage:
        "https://img.freepik.com/free-vector/smart-fridge-gas-oven-hood-kitchen-appliances_107791-2971.jpg?size=626&ext=jpg&ga=GA1.1.593219929.1699108181&semt=sph",
      productName: "Branded Item",
      productPrice: "$75.00 - 85.00",
    },
    {
      productImage:
        "https://img.freepik.com/premium-photo/dslr-camera-white_144962-4376.jpg?size=626&ext=jpg&ga=GA1.1.593219929.1699108181&semt=sph",
      productName: "Popular Item",
      productPrice: "19.00",
    },
  ];
  const [product] = useState(data);
  const [cartCount, setCartCount] = useState(0);

  const increaseCount = () => {
    setCartCount(cartCount + 1);
  };

  const decreaseCount = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  All Products
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Popular Items
                </a>
                <a className="dropdown-item" href="#">
                  New Arrivals
                </a>
              </div>
            </li>
          </ul>
          <div className="cart-comp">
            <h2>Cart {cartCount}</h2>
          </div>
        </div>
      </nav>
      <div className="title">
        <a>Shop In Style</a>
      </div>
      <div className="cart-area">
        {product.map((product, index) => (
          <Productcard
            key={index}
            index={index}
            productImage={product.productImage}
            productName={product.productName}
            productPrice={product.productPrice}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
        ))}
      </div>
      <div className="footer">
        <h6>Copyright © Your Website 2023</h6>
      </div>
    </div>
  );
}

export default App;
