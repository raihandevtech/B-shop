import React from "react";
import Grid from "./Grid";
import logo from "../assets/images/b-shop.png";
import payCard from "../assets/images/th.jfif";

function Footer() {
  return (
    <div className="footer_area">
      <div className="footer_area_wrapper container">
        <div className="footer_area_wrapper_left">
          <div className="brand_logo">
            <img src={logo} alt="" />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quas,
            ratione accusantium ullam cumque recusandae placeat sit nihil
            quibusdam, accusamus alias expedita provident ipsum voluptatibus.
          </p>
          <div className="contact_payment">
            <div className="contact">
              <h3>Got Question? Call us</h3>
              <h2>+0123 456 789</h2>
            </div>
            <div className="payment">
              <h3>Payment Method</h3>
              <img src={payCard} alt="" />
            </div>
          </div>
        </div>
        <div className="footer_area_wrapper_right grid grid-col-sm-2 grid-col-md-3">
          <div className="footer_widget">
            <h3>Information</h3>
            <ul>
              <li>About B Shop</li>
              <li>How to shop on B Shop</li>
              <li>Contact us</li>
              <li>Log in</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer_widget">
            <h3>Customer Service</h3>
            <ul>
              <li>Payment Methods</li>
              <li>Money-back guarantee!</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Terms and conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer_widget">
            <h3>My Account</h3>
            <ul>
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_area_copy_right">
        <p>Copyright © 2022 B Shop. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
