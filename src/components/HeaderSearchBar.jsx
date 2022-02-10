import { Link } from "react-router-dom";
import logo from "../assets/images/b-shop.png";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function HeaderSearchBar() {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <div className="search_bar_bg">
      <div className="container header_search-bar">
        <div className="header_search-bar_logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header_search-bar_input">
          <input type="text" placeholder="Search Product.." />
          <div className="search-icon">
            <SearchIcon className="icon" />
          </div>
        </div>
        <div className="header_search-bar_user">
          <div className="user-name">
            <PermIdentityIcon className="icon" />
            <p>Raihan</p>
          </div>
          <Link to="/cart">
            <div className="cart">
              <span>{totalProducts}</span>
              <AddShoppingCartIcon className="icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderSearchBar;
