import ProductItem from './ProductItem';
import {productList} from '../data/items';
const Shop = () => {
    return (
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-5 mt-10'>
            {productList.map((item) => (
                <ProductItem key={item.id} product={item} />
            ))}
        </div>
    )
}

export default Shop;