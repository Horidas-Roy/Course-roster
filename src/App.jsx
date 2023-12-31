/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const [totalPrice,setTotalPrice]=useState(0);
  const [totalCreditOurs,setTotalCreditOurs]=useState(0)
  const [remainingCreditOurs,setRemainingCreditOurs]=useState(20)
  // console.log(totalCreditOurs)
  
  
  const handleSelect=(cart)=>{
    const isExist=selectCourses.find(item=> item.id == cart.id)
    let totalAmount=0;
    if(isExist){
      return toast.warn('🦄This course is already selected!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
      // const remainingCreditOurs=20;
        totalAmount += parseFloat(cart.price);
        const newTotalPrice=totalPrice+totalAmount
        const newTotalCreditOurs=totalCreditOurs+parseFloat(cart.credit_hour)
        const newRemainingCreditOurs=remainingCreditOurs-parseFloat(cart.credit_hour)
        console.log(newTotalCreditOurs)
        if(newTotalCreditOurs<=20){
          setSelectCourses([...selectCourses,cart]);

         setTotalPrice(newTotalPrice)
         setTotalCreditOurs(newTotalCreditOurs)
         console.log(remainingCreditOurs)
         setRemainingCreditOurs(newRemainingCreditOurs);
        }
        else{
          return toast.warn('🦄Credit Our is Limited!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
  }

  return (
    <div className='container mx-auto mb-20'>
      <h2 className='text-4xl font-bold my-10'>Course Registration</h2>
      <div className='flex gap-4 justify-between flex-col lg:flex-row '>
        <div className='flex-1'>
             <Carts handleSelect={handleSelect}></Carts>
        </div>
        <div className=' md:full lg:w-1/4 mx-auto'>
             <Bookmarks 
             selectCourses={selectCourses}
             totalPrice={totalPrice}
             totalCreditOurs={totalCreditOurs}
             remainingCreditOurs={remainingCreditOurs}
             ></Bookmarks>
             {/* toast-container */}
            <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  )
}

export default App
