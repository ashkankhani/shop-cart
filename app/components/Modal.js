'use client'
import CartProduct from './CartProduct';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Modal = ({closeModal,total,items}) => {
    const [hozoori , setHozoori] = useState(true)
    const [code , setCode] = useState('')
    const [discount , setDiscount] = useState(0)
    console.log(code)
    const cart = useContext(CartContext);
    const discountHandler = () => {
        if (code == 'hello') {
            alert('تخفیف با مقدار 1000 اعمال شد')
            setDiscount(1000)
        }else{
            alert('تخفیف نا معتبر')
        }
    }
    console.log(hozoori)
    return (
        <div className='fixed h-full w-full bg-black/90 z-10 overflow-auto top-0 left-0'>
            <div className='z-20 w-96 mx-auto mt-10 bg-orange-100 p-5 rounded-md'>
                <div className='flex justify-between text-black bg-orange-100 border-b pb-5 border-gray-500'>
                    <button 
                        className="text-black"
                        onClick={closeModal}>X
                    </button>
                    <h3>سبد خرید</h3>
                    
                </div>

                {total > 0 && (
                    <div>
                        <div className='text-black flex flex-col gap-10 mt-10' dir='rtl'>
                            {cart.items.map(item => (
                                <CartProduct key={item.id} id={item.id} quantity={item.quantity}/>
                            ))}
                            
                            
                        </div>
                        <div dir='rtl'>
                            <p>روش تحویل</p>
                            <div>
                                <div className='flex justify-center gap-10'>
                                    <div>
                                    <label>حضوری</label>
                                    <input type='radio' name='delivery' value={'hozoori'}  onChange={()=>setHozoori(true)}/>
                                    </div>
                                    <div>
                                    <label>پیک</label>
                                    <input type='radio' name='delivery' value={'peyk'} onChange={()=>setHozoori(false)}/>
                                    </div>
                                </div>
                                {!hozoori && <input type='text' placeholder='آدرس' className='w-full my-2 px-5 py-1 rounded-md'/>}
                            </div>
                            <div className='flex justify-between'>
                                <input type='text' placeholder='کد تخفیف' onChange={e => setCode(e.target.value)}/>
                                <p className='text-blue-500 cursor-pointer' onClick={discountHandler}>اعمال کد تخفیف</p>
                            </div>

                        <p>کل مبلغ قابل پرداخت : {cart.getTotalAmount()-discount}</p>
                        
                        </div>
                        <button className='px-5 py-2 border border-black hover:bg-gray-400' onClick={closeModal}>سفارش و پرداخت</button>
                    </div>
                    
                    
                )}
            </div>
            
        </div>
    )
}

export default Modal;