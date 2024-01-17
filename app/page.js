import Navbar from './components/Navbar'
import Shop from './components/Shop';
import {CartProvider} from './context/CartContext';
export default function Home() {
  return (
    <main className='font-vazir bg-slate-900 2xl:h-screen h-full'>

      <div className='mx-32'>
        <CartProvider>
          <Navbar />
          <Shop />
        </CartProvider>
        <h2 className=' mt-64 pb-2 text-3xl text-center text-slate-300'>
        developed by <a 
          className='font-bold'
          href='https://github.com/ashkankhani/'>Ashkan Khani</a>
      </h2>
        
      </div>
      
    </main>
  )
}
