//React Context is used in React applications to manage and share state and data across multiple components without passing props manually through every level of the component tree. It provides a way to create global variables or a global state that can be accessed by any component in the application.

//props.children is a special prop that is used to access and render the content passed between the opening and closing tags of a component. It allows components to be used as containers or wrappers around other components or content.

import { createContext, useState, useEffect } from "react";
import { mockProductData } from '../mockProducts';
const products = mockProductData

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    const savedCartItems = localStorage.getItem("cartItems");

    //to check if there's any items in stored in localStorage
    if (savedCartItems) {
        return JSON.parse(savedCartItems);
    } else {
        //to get the initial state of the cart
        // let cart = {}
        // for (let i = 1; i < product.length + 1; i++) {
        //     cart[i] = 0;
        // }
        const cart = {};
        products.forEach((product) => {
            cart[product._id] = { colour: '', size: '', quantity: 0 };
        });
        return cart;
    }
}

const ShopContextProvider = (props) => { 

    const [cartItems, setCartItems] = useState(getDefaultCart());

     useEffect(() => {
        // Save cartItems to local storage whenever it changes
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
     }, [cartItems]);
    

    
    
    const getSubtotal = () => {


        // let subtotal = 0
        // for (const item in cartItems) {
        //     if (cartItems[item] > 0) {
        //         //find the product to have access to it's price

        //         let itemInfo = products.find((productItem) => productItem._id === item)
                
        //         //amount of that specific product in the cart * price
        //         if (itemInfo) {
        //             subtotal += cartItems[item] * itemInfo.price
        //         }
        //     } 
        // }


        let subtotal = 0;
        for (const itemId in cartItems) {
            const { colour, size, quantity } = cartItems[itemId];
        if (quantity > 0) {
            const itemInfo = products.find((product) => product._id === itemId);
        if (itemInfo) {
          subtotal += quantity * itemInfo.price;
        }
      }
    }

        return subtotal;
    }

    const addToCart = (itemId, colour, size) => {
        setCartItems((prevState) => ({
            ...prevState,
            [itemId]: {
                colour,
                size,
                quantity: prevState[itemId].quantity + 1,
            }
            // prevState[itemId] + 1
        }))

    }

    const removeFromCart = (itemId) => {
        setCartItems((prevState) => ({
            ...prevState,
            [itemId]: {
            ...prevState[itemId],
            quantity: prevState[itemId].quantity - 1,    
            }
            // prevState[itemId] - 1
        }))

    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prevState) => ({
            ...prevState,
            [itemId]: {
                ...prevState[itemId],
                quantity: newAmount, 
            } 
            // newAmount
        }))
    }
  
    //all the states and functions to be passed into provider to be used in other components
    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getSubtotal }
    
    console.log(cartItems)

    return (
        <ShopContext.Provider value={ contextValue }>
            {props.children}
        </ShopContext.Provider>
    )   
}

export default ShopContextProvider



