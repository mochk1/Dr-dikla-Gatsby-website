import React from 'react';
import Layout from '../components/layout/Layout';
import Me from '../components/Me';
import Crenio from '../components/Crenio';
import Chiro from '../components/Chiro';
import Contact from '../components/Contact';
import HeaderAnchor from '../components/layout/HeaderAnchor';
import HeaderPages from '../components/layout/HeaderPages';

const Index = () => (
  <Layout>
    <HeaderAnchor/>
    <HeaderPages/>
    <Me/>
<Chiro/>
<Crenio/>
<Contact/>
  </Layout>


);

export default Index;
