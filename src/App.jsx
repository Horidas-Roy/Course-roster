/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [selectCourses, setSelectCourses] = useState(0)
  
  const handleSelect=(cart)=>{
    console.log("handle click",cart)
  }

  return (
    <div className='container mx-auto mb-20'>
      <h2 className='text-4xl font-bold my-10'>Course Registration</h2>
      <div className='flex gap-5 justify-between flex-col-reverse md:flex-row'>
        <div className='flex-1'>
             <Carts handleSelect={handleSelect}></Carts>
        </div>
        <div className='w-1/4'>
             <Bookmarks></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
