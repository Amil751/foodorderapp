import { Fragment, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  // const submitHandler = (event) => {
  //   event.preventDefault();
  // };
  const inputREf = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    props.meal.amount=inputREf.current.value
    props.addItem(props.meal);
    
    
  };
  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={inputREf}
          label="Amount"
          input={{
            id: "amount_" + props.id, // this changed!
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button type="submit">+Add</button>
      </form>
    </Fragment>
  );
};
export default MealItemForm;
