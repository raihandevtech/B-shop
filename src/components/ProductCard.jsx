import { useState } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { useDispatch } from "react-redux";

import { set } from "../redux/product-modal/productModalSlice";

import numberWithCommas from "../utils/numberWithCommas";

import Button from "./Button";
import ProductRatting from "./ProductRatting";

const MAX_RATING = 5;
const MIN_RATING = 1;

function ProductCard({
  img01,
  img02,
  name,
  price,
  slug,
  description,
  oldprice,
}) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  return (
    <div className="product_card">
      <Link to={`/catalog/${slug}`}>
        <div className="product_card_img">
          <img src={img01} alt="" />
          <img src={img02} alt="" />
        </div>
      </Link>
      <div className="product_card_content">
        <div className="product_card_content_ratting">
          <ProductRatting rating={rating} />
        </div>
        <Link to={`/catalog/${slug}`}>
          <h3 className="product_card_content_name">{name}</h3>

          <p className="product_card_content_description">{description}</p>
        </Link>
        <div className="product_card_content_price">
          <span>${numberWithCommas(price)}</span>
          {oldprice ? (
            <span>
              <del>${numberWithCommas(oldprice)}</del>
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="product_card_content_btn">
          <Link to={`/catalog/${slug}`}>
            <Button
              size="sm"
              icon={AddShoppingCartIcon}
              animate={true}
              onClick={() => dispatch(set(slug))}
            >
              choose to buy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
