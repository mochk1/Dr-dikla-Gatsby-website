import React, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Layout from '../components/layout/Layout'
import Headerlinks from '../components/layout/Headerlinks';
import HeaderPages from '../components/layout/HeaderPages';


 const Posts = () => {

const [postopen, setpostopen] = useState(false)


    return (
        <Layout>
                 <Headerlinks/>
            <HeaderPages/>
        <div id='posts' dir='rtl' className='mx-auto text-section  container  mb-3 bg-indigo-100'>

            <p className=' pt-4 text-2xl font-semibold text-center'>פרסומים </p>

      


<div className='grid grid-cols-1 sm:grid-cols-2 py-8 gap-4 justify-items-center   '>


<iframe className=' ' src="https://www.youtube.com/embed/V5U4fU37Yec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe className=' ' src="https://www.youtube.com/embed/KFjkUo2xJQU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe className=' ' src="https://www.youtube.com/embed/pL3jwGqvN-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe className=' ' src="https://www.youtube.com/embed/KgE2OUkYC58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>




        </div>
        </Layout>
    )
}


export default Posts;
