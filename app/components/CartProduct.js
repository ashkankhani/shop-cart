import {getProductData} from '../data/items';
import { useContext } from 'react';
import {CartContext} from '../context/CartContext';
const CartProduct = ({id , quantity}) => {
    const productData = getProductData(id);
    const cart = useContext(CartContext);
    return (
        <div className='flex justify-between items-center'>
            <div>
                <p>{productData.title}</p>
                <p>تعداد : {quantity}</p>
                <p>قیمت: {productData.price * quantity}</p>
            </div>
            <button 
                className='py-2 px-3 border-2 border-black rounded-md mt-5 hover:bg-gray-500 hover:text-white'
                onClick={() => cart.deleteFromCart(id)}>حذف</button>
        </div>
    )
}


export default CartProduct;