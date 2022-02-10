import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CartItem from "../components/CartItem";

import productData from "../assets/fake-data/products";
import numberWithCommas from "../utils/numberWithCommas";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Cart">
      <div className="cart_wrapper container">
        <div className="cart_info">
          <div className="cart_info_text">
            <h3>You have {totalProducts} products in your shopping cart</h3>
            <div className="cart_info_text_price">
              <span>Into Money:</span>{" "}
              <span>${numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart_info_btn">
            <Button size="block">Order</Button>
            <div className="gap"></div>
            <Link to="/catalog">
              <Button size="block">Continue shopping</Button>
            </Link>
          </div>
        </div>
        <div className="cart_list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
}

export default Cart;
