import { Link } from "react-router-dom";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import numberWithCommas from "../utils/numberWithCommas";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { updateItem, removeItem } from "../redux/shopping-cart/cartItemsSlide";

function CartItem(props) {
  const dispatch = useDispatch();

  const itemRef = useRef(null);

  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);
  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (opt) => {
    if (opt === "+") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
    }
    if (opt === "-") {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 })
      );
    }
  };

  // const updateCartItem = () => {
  //     dispatch(updateItem({...item, quantity: quantity}))
  // }

  const removeCartItem = () => {
    console.log("removeCartItem");
    dispatch(removeItem(item));
  };
  return (
    <div className="cart_item" ref={itemRef}>
      <div className="cart_item_image">
        <img src={item.product.image01} alt="" />
      </div>
      <div className="cart_item_info">
        <div className="cart_item_info_name">
          <Link
            to={`/catalog/${item.slug}`}
          >{`${item.product.title} - ${item.color} - ${item.size}`}</Link>
        </div>
        <div className="cart_item_info_price">
          ${numberWithCommas(item.price)}{" "}
        </div>
        <div className="cart_item_info_quantity">
          <div
            className="cart_item_info_quantity_btn"
            onClick={() => updateQuantity("-")}
          >
            <RemoveRoundedIcon className="icon" />
          </div>
          <div className="cart_item_info_quantity_input">{quantity}</div>
          <div
            className="cart_item_info_quantity_btn"
            onClick={() => updateQuantity("+")}
          >
            <AddRoundedIcon className="icon" />
          </div>
        </div>
        <div className="cart_item_info_del" onClick={() => removeCartItem()}>
          <DeleteOutlineIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
