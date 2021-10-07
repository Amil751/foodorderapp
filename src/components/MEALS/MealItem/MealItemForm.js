import { Fragment, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useDispatch,useSelector } from "react-redux";
import { cartDataAction } from "../../STORE/cartdata";
const MealItemForm = (props) => {
  const dispatch=useDispatch();
  const a=useSelector(state=>state.cart.datacart)
  // const {id,quantity,name,price}=props.meal

  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const meal=props.meal;
    dispatch(cartDataAction.addItemToCart({...meal,totalquantity:inputRef.current.value}))
    console.log('after adding meals',a);
  };
  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={inputRef}
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
