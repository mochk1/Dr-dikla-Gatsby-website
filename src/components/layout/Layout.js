import React from 'react';
import Footer from './Footer';
import Header from './Header'
import Headerlinks from './Headerlinks';
import HeaderPages from './HeaderPages';
import HeaderAnchor from './HeaderAnchor';


const Layout = ({ children }) => {
  return (
    <>
    <div dir='rtl' className='font-assistant sm:max-w-4xl md:max-w-3xl lg:w-9/12 xl:max-w-3xl px-2 mx-auto'>
      <Header/>

      <main className="text-gray-900 font-assistant">{children}</main>
      <Footer />
      </div>
    </>
  );
};

export default Layout;
