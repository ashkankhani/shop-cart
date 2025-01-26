'use client';
import Modal from './Modal';
import {useState} from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
const Cart = () => {
    const [show , setShow] = useState(false);
    const cart = useContext(CartContext);

    const total = cart.items.reduce((sum , product) => sum + product.quantity , 0);
    return (
        <>
            <button 
                onClick={() => setShow(true)}
                className="px-3 py-2 rounded-md border-2  border-black text-black hover:bg-gray-500 hover:text-white cursor-pointer">
                    <span>سبد خرید  </span>
                    {total>0 && <span>({total})</span>}
            </button>
            {show && <Modal 
                closeModal={() => setShow(false)}
                total = {total}
                items = {cart.items}
                />}
            
        </>
       
        
    )
}

export default Cart;