import React from 'react'
import {Link} from 'gatsby'


function HeaderPages() {
    return (
        <section className='pt-2 lg:flex lg:flex-row lg:justify-between mb-3' >
<div className='flex justify-around lg:w-1/2 '>
    <Link to='/Kids'><p className='font-semibold text-indigo-800'>ילדים ותינוקות</p></Link>|
    <Link to='/Pregnancy'><p className='font-semibold text-indigo-800'>פריון והריון</p></Link>|
    <Link to='/Age'><p className='font-semibold text-indigo-800'>גיל המעבר</p></Link><p className='hidden lg:flex'>|</p>
    </div>
    <div className='flex justify-around mt-3 lg:mt-0 lg:mr-3 lg:w-1/2'>
    <Link to='/Anxiety'><p className='font-semibold text-indigo-800'> טיפול בחרדות</p></Link>|
    <Link to='/WhatHurts'><p className='font-semibold text-indigo-800'>מה כואב לך?  </p></Link>|
    <Link to='/Posts'><p className='font-semibold pl-2 text-indigo-800'>פרסומים</p></Link>
    </div>

      </section>
    )
}

export default HeaderPages
