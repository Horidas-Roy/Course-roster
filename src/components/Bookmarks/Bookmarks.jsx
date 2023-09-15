/* eslint-disable react/prop-types */




const Bookmarks = ({selectCourses,totalPrice,totalCreditOurs,remainingCreditOurs}) => {
    // console.log(totalPrice)
    return (
        <div className="bg-[#FFF] p-6 text-start shadow-md rounded-lg">
            <h1 className="text-[#2F80ED] text-[18px] font-bold">Credit Hour Remaining {remainingCreditOurs}hr</h1>
            <hr className="my-4"/>
            <h1 className="text-xl font-bold mb-5">Courses Name</h1>
            
            <div>
               
            { 
              
                selectCourses.map((course ,idx)=>(
                    <h1 key={idx}>{idx+1}.{course.course_name}</h1>
                    ))
                }
                
               
            </div>
            <hr className="mt-6 mb-4"/>
        <p className="text-[#1C1B1B80] font-semibold">Total Credit Hour : {totalCreditOurs}</p>
            <hr className="my-4"/>
            <p className="text-[#1C1B1B80] font-semibold">Total Price : {totalPrice} USD</p>
        </div>
    );
};

export default Bookmarks;