import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState({});
    
    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]: 1}));
        }
        else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}));
    }
    
    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}
// this it to define the children prop
// if not defined a warning is shown that is annoying
StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default StoreContextProvider;