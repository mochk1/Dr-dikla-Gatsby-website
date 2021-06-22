import React, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Layout from '../components/layout/Layout'
import Headerlinks from '../components/layout/Headerlinks';
import HeaderPages from '../components/layout/HeaderPages';

 const WhatHurts = () => {

const [postopen, setpostopen] = useState(false)


    return (
        <Layout>
                 <Headerlinks/>
            <HeaderPages/>
        <div id='whathurts' dir='rtl' className='mx-auto text-section  container  bg-indigo-100'>

            <p className='px-5 pt-4 text-2xl font-semibold text-center'>מה כואב לך? </p>


 <div className=' grid grid-cols-2 grid-rows-5 sm:grid sm:grid-cols-4  gap-2  p-5 pb-8  mb-3'>


<p className='bg-indigo-200 font-semibold text-center pt-3 '> כאב גב</p>
<p className='bg-indigo-200 font-semibold  text-center pt-3 '> כאב צוואר</p>
<p className='bg-indigo-200 font-semibold  text-center pt-3'> כאב פנים ולסת</p>
<p className='bg-indigo-200 font-semibold  text-center pt-3'> כאב  ראש</p>
<p className='bg-indigo-200 font-semibold  text-center pt-3'> כאב  אוזניים</p>
<p className='bg-indigo-200 font-semibold  text-center pb-1'> כאבים ביריכיים,<br /> ברכיים ורגלים</p>
<p className='bg-indigo-200 font-semibold  text-center pt-3'> כאבי גדילה</p>
<p className='bg-indigo-200 font-semibold  text-center pt-3'> כאבים בזמן ההריון </p>
<p className='bg-indigo-200 font-semibold  text-center '> כאבים בכתף,<br /> במרפק ובכף היד  </p>
<p className='bg-indigo-200 font-semibold  text-center pt-3'> נוקשות בשרירים </p>
<p className='bg-indigo-200 font-semibold  text-center py-3 sm:pt-3'> מערכת חיסון חלשה  </p>
<p className='bg-indigo-200 font-semibold  text-center py-3 sm:pt-3'> בעיות בבריאות נשים </p>
<p className='bg-indigo-200 font-semibold  text-center '> בעיות במערכת  <br />העיכול </p>
<p className='bg-indigo-200 font-semibold  text-center pt-3'> חרדה ועצבנות </p>
<p className='bg-indigo-200 font-semibold  text-center py-3 sm:pt-3'> כאב בעקבות תאונה </p>
<p className='bg-indigo-200 font-semibold  text-center py-3 sm:pt-3'> סחרחורת </p>
<p className='bg-indigo-200 font-semibold  text-center py-3 sm:pt-3'> עקמת </p>
<p className='bg-indigo-200 font-semibold  text-center py-3 sm:pt-3'> יציבה לקויה </p>
<p className='bg-indigo-200 font-semibold  text-center pt-3'> שינה מופרעת  </p>
<p className='bg-indigo-200 font-semibold  text-center '> עייפות כרונית <br /> ואנרגיה ירודה   </p>
</div> 
        
        </div>
        </Layout>
    )
}


export default WhatHurts;
