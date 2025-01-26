'use client'
import { useState } from 'react';
import Navbar from './components/Navbar'
import Shop from './components/Shop';
import {CartProvider} from './context/CartContext';
export default function Home() {
  const [search,setSearch] = useState('')
  console.log(search)
  return (
    <main className='font-vazir bg-orange-100 min-h-screen w-screen'>
      
      <div className='mx-32'>
        <CartProvider>
          <Navbar />
          <div className='flex justify-end'>
          <input onChange={(e) => setSearch(e.target.value)} className='my-2 px-5 py-2 rounded-md' type='text' placeholder='جستجو'/>
          </div>
          <Shop search={search}/>
        </CartProvider>  
      </div>
      
    </main>
  )
}
