import Image from 'next/image';
import AddToCart from './AddToCart';

const ProductItem = ({product}) => {
    return (
        <div className='flex flex-col items-center px-2 pt-1 pb-4 bg-slate-800 rounded-md transition ease-in-out duration-300 hover:scale-105'>
            <div className='relative w-full h-40 rounded-md overflow-hidden'>
                <Image
                    src={product.image}
                    fill={true}
                    alt={product.title}
                    className='object-cover'
                />
            </div>
            <div className='text-white'>
                <h3 className="pt-4 font-bold text-lg">{product.title}</h3>
                <p className='flex justify-center gap-2'>
                    <span>تومان</span>
                    <span>{product.price}</span>
                    
                </p>
                <AddToCart id={product.id}/>
            </div>
            
        </div>
    )
}

export default ProductItem;
