/* eslint-disable react/prop-types */
import { FaDollarSign,FaBook } from 'react-icons/fa';


const Cart = ({cart,handleSelect}) => {
    // console.log(cart)
    const {course_name,cover_img,description,price,credit_hour}=cart
    return (
        <div className="text-start p-4 bg-[#FFF] rounded-xl shadow-md ">
            <img className='w-full ' src={cover_img} alt="" />
            <h3 className='text-[18px] font-semibold mt-4'>{course_name}</h3>
            <p className='text-sm text-[#1C1B1B99] mb-5 mt-3'>{description}</p>
            <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex gap-1 items-center'>
                <FaDollarSign></FaDollarSign>
                <p className='text-base text-[#1C1B1B99]'>price:{price}</p>
            </div>
            <div className='flex gap-1 items-center'>
                <FaBook></FaBook>
                <p className='text-base text-[#1C1B1B99]'>credit:{credit_hour}hr</p>
            </div>
            </div>
            <button onClick={()=>handleSelect(cart)} className='w-full bg-[#2F80ED] text-[#FFF] font-semibold mt-6 py-3 rounded-lg border-[1px] border-[#2F80ED]'>Select</button>
        </div>
    );
};

export default Cart;