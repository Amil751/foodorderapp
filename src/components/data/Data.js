import { Fragment } from "react";

const Data=()=>{
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
  dispatch(foodOrderAction.addItemTocart(newdata));
  return <Fragment>
      
  </Fragment>
}
export default Data;