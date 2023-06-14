//React Context is used in React applications to manage and share state and data across multiple components without passing props manually through every level of the component tree. It provides a way to create global variables or a global state that can be accessed by any component in the application.

//props.children is a special prop that is used to access and render the content passed between the opening and closing tags of a component. It allows components to be used as containers or wrappers around other components or content.

import { createContext, useState, useEffect, useReducer } from "react";
import axios from 'axios';
// import { mockProductData } from '../mockProducts';
// const products = mockProductData

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    const savedCartItems = localStorage.getItem("cartItems");

    //to check if there's any items in stored in localStorage
    if (savedCartItems) {
        return JSON.parse(savedCartItems);
    } else {
        return {};
    }
}


const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     // Save cartItems to local storage whenever it changes
    //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // }, [cartItems]);

    useEffect(() => {

        axios.get(`${import.meta.env.VITE_REACT_APP_DB_URL}products`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const addToCart = (itemId, colour, size) => {

        const key = `${itemId}-${colour}-${size}`;
        const updatedItems = { ...cartItems };

        if (updatedItems[key]) {
            updatedItems[key].quantity += 1;
        } else {
            updatedItems[key] = {
                itemId,
                colour,
                size,
                quantity: 1,
            };
        }

        setCartItems(updatedItems);
    }

    const removeFromCart = (key) => {

        const updatedItems = { ...cartItems };

        if (updatedItems[key].quantity > 1) {
            updatedItems[key].quantity -= 1
        } else {
            delete updatedItems[key];
        }

        setCartItems(updatedItems);
    }

    const updateCartItemCount = (newAmount, key) => {

        setCartItems((prevState) => {
            const updatedItems = { ...prevState };
            if (newAmount > 0) {
                updatedItems[key].quantity = newAmount;
            } else {
                delete updatedItems[key];
            }
            return updatedItems;
        });
    }

    //all the states and functions to be passed into provider to be used in other components
    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, products }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider



