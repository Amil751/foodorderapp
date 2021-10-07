import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { foodOrderAction } from "../STORE/slice";
import { useSelector } from "react-redux";
const AvailableMeals = () => {
  const foodlist = useSelector((state) => state.order.data);
  const dispatch = useDispatch();
  const [newdata, setData] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://react-http-app-564e3-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchMeals();
  }, []);
  dispatch(foodOrderAction.getDataFromdataBase(newdata));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {foodlist.map((item) => {
            return (
              <MealItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
