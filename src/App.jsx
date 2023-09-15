/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [selectCourses, setSelectCourses] = useState([])
  const [totalPrice,setTotalPrice]=useState(0);
  const [totalCreditOurs,setTotalCreditOurs]=useState(0)
  const [remainingCreditOurs,setRemainingCreditOurs]=useState(20)
  console.log(totalCreditOurs)



  
  const handleSelect=(cart)=>{
    const isExist=selectCourses.find(item=> item.id == cart.id)
    let totalAmount=0;
    if(isExist){
      return alert('This is already selected');
    }
    
        totalAmount += parseFloat(cart.price);
        const newTotalPrice=totalPrice+totalAmount
        const newTotalCreditOurs=totalCreditOurs+parseFloat(cart.credit)
        const newRemainingCreditOurs=remainingCreditOurs-parseFloat(cart.credit)

        if(newTotalCreditOurs<=20){
          setSelectCourses([...selectCourses,cart]);

         setTotalPrice(newTotalPrice)
         setTotalCreditOurs(newTotalCreditOurs)
         console.log(remainingCreditOurs)
         setRemainingCreditOurs(newRemainingCreditOurs);
        }
        else{
          return alert("Credit Ours limited");
        }
    
    

    
  }

  return (
    <div className='container mx-auto mb-20'>
      <h2 className='text-4xl font-bold my-10'>Course Registration</h2>
      <div className='flex gap-5 justify-between flex-col-reverse md:flex-row'>
        <div className='flex-1'>
             <Carts handleSelect={handleSelect}></Carts>
        </div>
        <div className='w-1/4'>
             <Bookmarks 
             selectCourses={selectCourses}
             totalPrice={totalPrice}
             totalCreditOurs={totalCreditOurs}
             remainingCreditOurs={remainingCreditOurs}
             ></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
