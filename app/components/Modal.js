import CartProduct from './CartProduct';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Modal = ({closeModal,total,items}) => {
    const cart = useContext(CartContext);
    return (
        <div className='fixed h-full w-full bg-black/90 z-10 overflow-auto top-0 left-0'>
            <div className='z-20 w-96 mx-auto mt-10 bg-gray-800 p-5 rounded-md'>
                <div className='flex justify-between text-white bg-gray-800 border-b pb-5 border-gray-500'>
                    <button 
                        className="text-gray-400"
                        onClick={closeModal}>X
                    </button>
                    <h3>سبد خرید</h3>
                    
                </div>

                {total > 0 && (
                    <div className='text-white flex flex-col gap-10 mt-10' dir='rtl'>
                        {cart.items.map(item => (
                            <CartProduct key={item.id} id={item.id} quantity={item.quantity}/>
                        ))}
                        <p>کل مبلغ قابل پرداخت : {cart.getTotalAmount()}</p>
                    </div>
                    
                )}
            </div>
            
        </div>
    )
}

export default Modal;