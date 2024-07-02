/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const url = "http://localhost:4000";

  const [token , setToken] = useState("");

  const [food_list, setFoodList] = useState([]);
  
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      console.log(cartItems)
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    // cartItems is not an array of objects
    // so we use item in cartItems to only iterate the keys of given object
    // if it was an array we do the below
    // for (const item of cartItems) {
    //     for (const key in item) {

    // the of cartItems is used to iterate through the array of objects then the in item is used to give the keys in each object
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item); 
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async() => {
    const res = await axios.get(`${url}/api/food/list`);
    setFoodList(res.data.data);
  }
  
  useEffect(() => {
    async function loadData(){
      await fetchFoodList();
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
      }
    }
    loadData();
  }, [])
  

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
