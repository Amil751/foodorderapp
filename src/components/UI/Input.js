import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor="Amount">{props.label}</label>
      <input ref={ref} {...props.input} defaultValue="1" />
    </div>
  );
});
export default Input;
