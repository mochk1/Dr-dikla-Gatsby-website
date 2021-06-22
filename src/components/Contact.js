import React, {useState} from 'react'
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {

const [clicked,setclicked] = useState(false);

    const [state, handleSubmit] = useForm("mbjqylwy");
    if (state.succeeded) {
        return <p  className='bg-indigo-100 text-center mb-3 py-3'>ההודעה נשלחה בהצלחה!</p>;
    }


    return (
<div id='contact' className='bg-indigo-100 mb-3 mx-auto' >
<p className='text-center py-3 font-semibold text-indigo-900 text-2xl'>צרו קשר</p>





<form className='flex flex-col pb-3' onSubmit={handleSubmit}>
<div className='mx-auto '>
   <p>שם</p>
<input id='name' name='name' required='true' className='px-3 py-2'  type="text" />
</div>

<div className='mx-auto mt-5'>
   <p>מייל \ טלפון</p>
<input id='phone' name='phone'  className='px-3 py-2'  type="phone" />
</div>

<div className='mx-auto mt-5'>
   <p>טקסט</p>
<textarea id='message' required='required'   name="message" id="" cols="40" rows="5"></textarea>
</div>

<button onClick={()=>setclicked(!clicked)} type='submit' className={`rounded bg-indigo-900 px-3  py-2 text-white font-semibold w-24 mx-auto mt-3`}>שליחה</button>
</form >

</div>
    )
}


export default Contact;