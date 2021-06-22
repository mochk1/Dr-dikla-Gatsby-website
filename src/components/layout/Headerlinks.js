import React from 'react'
import {Link} from 'gatsby'

function Headerlinks() {
    return (
      <header className=" bg-white  " dir="rtl">
      <div className=" justify-between items-center mx-auto ">
            
      <div className="flex justify-around py-5   bg-indigo-100 ">
        
    
      
        <Link to='/#me' className=" text-indigo-800 font-semibold flex-shrink-0" href="#me">
      
          מי אני
          
        
          </Link>
        
      
          <Link to='/#chiro' className=" text-indigo-800 font-semibold flex-shrink-0" href="#chiro">
        
          כירופרקטיקה
        
        </Link>

        <Link to='/#crenio' className=" text-indigo-800 font-semibold flex-shrink-0" href="#crenio">
        
          קרניו סקראל
         
        </Link>

        <Link to='/#contact' className=" text-indigo-800 font-semibold flex-shrink-0" href="#contact">
       
          יצירת קשר
         
        </Link>
      </div>

   
<img className='mt-2 mx-auto' src="/cover.jpg" alt="" />



        </div>
      
  </header>
    )
}

export default Headerlinks
