import React from 'react'
import './App.css'
import {Footer, Blog, Possibility, Header,Features,WhatGPT3} from './containers'
import {CTA, Artices, Brand, Feature, Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>c
      </div>

      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/> 
      <Footer/>
    </div>
  );
}

export default App