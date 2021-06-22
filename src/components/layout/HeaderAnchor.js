import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
function HeaderAnchor() {
    return (
       <div>
         <div className="flex justify-around py-5  bg-indigo-100 ">
        
        
      
        <AnchorLink className=" text-indigo-800 font-semibold flex-shrink-0" href="#me">
      
          מי אני
          
        
          </AnchorLink>
        
      
        <AnchorLink className=" text-indigo-800 font-semibold flex-shrink-0" href="#chiro">
        
          כירופרקטיקה
        
        </AnchorLink>

        <AnchorLink className=" text-indigo-800 font-semibold flex-shrink-0" href="#crenio">
        
          קרניו סקראל
         
        </AnchorLink>

        <AnchorLink className=" text-indigo-800 font-semibold flex-shrink-0" href="#contact">
       
          יצירת קשר
         
        </AnchorLink>

        
      </div> 
      <img className='mt-2 mx-auto' src="/cover.jpg" alt="" />
      </div>
    )
}

export default HeaderAnchor
