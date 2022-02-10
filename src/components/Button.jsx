function Button(props) {
  const bg = props.backgroundColor ? "bg-" + props.backgroundColor : "bg-main";
  const animate = props.animate ? "btn_animate" : "";
  const size = props.size ? "btn_" + props.size : "";

  return (
    <button
      className={`btn ${size} ${animate}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <span className="btn_txt">{props.children}</span>
      {props.icon ? (
        <span className="btn_icon">{<props.icon className="icon" />}</span>
      ) : null}
    </button>
  );
}

export default Button;
