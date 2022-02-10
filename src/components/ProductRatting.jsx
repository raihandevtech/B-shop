import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function ProductRatting({ rating }) {
  return (
    <div className="product_ratting">
      <div className="product_ratting_full">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarOutlinedIcon />
          ))}
      </div>
      <div className="product_ratting_emty">
        <StarBorderIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <StarBorderIcon />
      </div>
    </div>
  );
}

export default ProductRatting;
