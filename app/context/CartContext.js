'use client'
import { createContext } from "react";
import {useState} from 'react';
import { getProductData } from "../data/items";
export const CartContext = createContext({
    items : [],
    getProductQuantity : () => {},
    addItemToCart : () => {},
    removeItemFromCart : () => {},
    deleteFromCart : () => {},
    getTotalAmount : () => {}
})


export const CartProvider = ({children}) => {
    const [cartProducts , setCartProducts] = useState([]);

    const getProductQuantity = (id) => {
        const quantity = cartProducts.find((item) => item.id === id)?.quantity;

        if(quantity === undefined)
            return 0;

        return quantity;
    }

    const addItemToCart = (id) => {
        const quantity = getProductQuantity(id);
        if(quantity === 0)
            setCartProducts(prevCartProducts => [...prevCartProducts,{id:id,quantity:1}])
        else
            setCartProducts(prevCartProducts => prevCartProducts.map((item) => item.id === id ? {...item , quantity:item.quantity+1}:item))
    }

    const deleteFromCart = (id) => {
        setCartProducts(prevCartProducts => prevCartProducts.filter((item) => item.id !== id))
    }

    const removeItemFromCart = (id) => {
        const quantity = getProductQuantity(id);

        if(quantity === 1){
            deleteFromCart(id);
        }else{
            setCartProducts(prevCartProducts=>prevCartProducts.map(item => item.id === id ? {...item , quantity:item.quantity-1} : item))
        }
    }

    const getTotalAmount = () => {
        let totalAmount = 0;

        cartProducts.forEach(item => {
            const productData = getProductData(item.id);
            totalAmount += productData.price * item.quantity;
        })

        return totalAmount;
    }
    const ContextValue = {
        items : cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCart,
        getTotalAmount
    }
    return (
        <CartContext.Provider value={ContextValue}>
            {children}
        </CartContext.Provider>
    )
}