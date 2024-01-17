'use client'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const AddToCart = ({id}) => {
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(id);

    return (
        
        <div className="mt-8">
            {productQuantity > 0 ? 
            <>
                <div className="flex justify-between items-center gap-6">
                    <p>{`تعداد : ${productQuantity}`}</p>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => cart.addItemToCart(id)}
                            className="btn-pm">+</button>
                        <button 
                            onClick={() => cart.removeItemFromCart(id)}
                            className="btn-pm">-</button>
                    </div>
                </div> 
                <button 
                    onClick={() => cart.deleteFromCart(id)}
                    className="mt-3 px-3 py-2 border border-white rounded-md hover:bg-white hover:text-black">حذف از سبد خرید</button>
            </>: 
            (<button 
                className="mt-2 px-3 py-2 border-2 border-white rounded-md hover:bg-white hover:text-black cursor-pointer text-white"
                onClick={() => cart.addItemToCart(id)}>افزودن به سبد خرید
            </button>)}
        </div>
    )
}

export default AddToCart;