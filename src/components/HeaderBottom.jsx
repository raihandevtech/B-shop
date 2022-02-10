import ViewHeadlineTwoToneIcon from "@material-ui/icons/ViewHeadlineTwoTone";

function HeaderBottom({ handleClick }) {
  return (
    <div className="header_bottom_bg">
      <div className="header_bottom container">
        <div className="header_bottom_bar" onClick={() => handleClick()}>
          <ViewHeadlineTwoToneIcon className="icon" />
          <p>All</p>
        </div>
        <div className="header_bottom_categorys">
          <p>Prime Video</p>
          <p>Amazon Business</p>
          <p>Today's Deals</p>
          <p>Electronics</p>
          <p>Food & Grocery</p>
          <p>Prime</p>
          <p>Buy Again</p>
          <p>Shopper Toolkit</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
