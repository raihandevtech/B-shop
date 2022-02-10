import { useRef } from "react";

function CheckBox(props) {
  const inputRef = useRef(null);
  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };

  return (
    <label className="custom_checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        checked={props.checked}
        onChange={onChange}
      />
      <span className="custom_checkbox_checkmark">
        <i className="bx bx-check"></i>
      </span>
      {props.label}
    </label>
  );
}

export default CheckBox;
