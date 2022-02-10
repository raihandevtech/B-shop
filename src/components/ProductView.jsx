import ProductRatting from "./ProductRatting";
import numberWithCommas from "../utils/numberWithCommas";
import { useState, useEffect } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import Button from "./Button";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addItem } from "../redux/shopping-cart/cartItemsSlide";
import { remove } from "../redux/product-modal/productModalSlice";

function ProductView({ product }) {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  if (product === undefined)
    product = {
      title: "",
      price: "",
      image01: null,
      image02: null,
      categorySlug: "",
      colors: [],
      slug: "",
      size: [],
      description: "",
    };

  const [hideDesc, setHideDesc] = useState(true);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);

  const ReadMoreHandler = () => {
    setHideDesc(false);
  };

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const check = () => {
    if (color === undefined) {
      alert("Please choose color!");
      return false;
    }
    if (size === undefined) {
      alert("Please choose a size!");
      return false;
    }
    return true;
  };
  const addToCart = () => {
    if (check()) {
      let newItem = {
        slug: product.slug,
        color: color,
        size: size,
        price: product.price,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        alert("Success");
      } else {
        alert("Fail");
      }
    }
  };

  const goToCart = () => {
    if (check()) {
      let newItem = {
        slug: product.slug,
        color: color,
        size: size,
        price: product.price,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        dispatch(remove());
        navigate("/cart");
      } else {
        alert("Fail");
      }
    }
  };

  return (
    <div className="product">
      <div className="product_wrapper">
        <div className="product_images">
          <div className="product_images_list">
            <div
              className="product_images_list_item"
              onClick={() => setPreviewImg(product.image01)}
            >
              <img src={product.image01} alt=" " />
            </div>
            <div
              className="product_images_list_item"
              onClick={() => setPreviewImg(product.image02)}
            >
              <img src={product.image02} alt="" />
            </div>
          </div>
          <div className="product_images_main">
            <img src={previewImg} alt="" />
          </div>
        </div>
        <div className="product_info">
          <div className="product_info_ratting">
            <ProductRatting rating={4} />
          </div>
          <h2 className="product_info_title">{product.title}</h2>
          <div className="product_info_price">
            <div className="regular_price">
              ${numberWithCommas(product.price)}
            </div>
            <div className="old_price">
              <del>${numberWithCommas(product.oldPrice)}</del>
            </div>
          </div>
          <div className="product_info_colors">
            <h3>Color</h3>
            <div className="product_info_colors_item">
              {product.colors.map((item, index) => (
                <div
                  key={index}
                  className={`product_info_colors_item_color ${
                    color === item ? "active" : ""
                  }`}
                  onClick={() => setColor(item)}
                >
                  <div className={`circle bg-${item}`}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="product_info_size">
            <h3>Size</h3>
            <div className="product_info_size_items">
              {product.size.map((item, index) => (
                <div
                  key={index}
                  className={`product_info_size_items_single ${
                    size === item ? "active" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  <div className={`circle`}>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="product_info_quantity">
            <h3>Quantily</h3>
            <div className="product_info_quantity_main">
              <div
                className="product_info_quantity_main_btn"
                onClick={() => updateQuantity("minus")}
              >
                <RemoveRoundedIcon className="icon" />
              </div>
              <div className="product_info_quantity_main_input">{quantity}</div>
              <div
                className="product_info_quantity_main_btn"
                onClick={() => updateQuantity("plus")}
              >
                <AddRoundedIcon className="icon" />
              </div>
            </div>
          </div>
          <div className="product_info_button">
            <Button onClick={() => addToCart()} className="btn" size="sm">
              add to card
            </Button>
            <Button onClick={() => goToCart()} className="btn" size="sm">
              buy now
            </Button>
          </div>
        </div>
      </div>
      <div className="product_desc">
        <p className={`${hideDesc && "hide"}`}>{product.description}</p>
        <div className={`read_more ${!hideDesc && "hide_btn"}`}>
          <p onClick={ReadMoreHandler}>Read More...</p>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
