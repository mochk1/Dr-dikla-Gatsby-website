import React from 'react';

import {Link, navigate} from 'gatsby'
import { faPhoneAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => (
  <header className=" bg-white  " dir="rtl">
    <div className=" justify-between items-center mx-auto pt-4 ">



      <div className=" flex-col lg:flex sm:flex-row sm:justify-between text-2xl  leading-9">

          <div className='flex-col lg:flex-row align items-center justify-center sm:justify-start '>
            <div className='flex justify-center lg:justify-start '>
            
             <Link to='/'><h1 className="flex flex-shrink-0 text-5xl mb-1 text-indigo-800 text-center  lg:text-right font-bold ">ד"ר דקלה אורן </h1></Link> 
              <img src='/flower.png' className='w-12 mr-2' alt=""  />
            </div>
              <p className="text-xl flex-shrink-0 leading-6 mb-2 text-center ml-12 sm:text-center md:text-center lg:text-right   ">כירופרקטורית ומטפלת בקרניו סקראל </p>
          </div>

        
          

          <div className="text-base flex sm:items-end  justify-center lg:justify-end flex-shrink-0 ">
            <p className="mx-2">  054-644-4822 <FontAwesomeIcon icon={faPhoneAlt} className='pr-1'/></p>
            <p className="mx-2">diklaoren@yahoo.com <FontAwesomeIcon icon={faEnvelope} className='pr-1'/></p>
          </div>

      </div>



   




    </div>
  </header>
);

export default Header;
