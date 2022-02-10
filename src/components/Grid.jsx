const Grid = (props) => {
  const style = {
    gap: props.gap ? `${props.gap}px` : "0",
    justifySelf: "center",
  };

  const lgCol = props.lgCol ? `grid-col-lg-${props.lgCol}` : "";
  const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : "";
  const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : "";
  const container = props.container ? `container` : "";

  return (
    <div
      className={`grid ${container} ${lgCol} ${mdCol} ${smCol}`}
      style={style}
    >
      {props.children}
    </div>
  );
};

export default Grid;
