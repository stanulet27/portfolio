import React from 'react'

import {About, Footer, Header, Goals, Resume, Work} from './containers/'
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Goals />
      <Resume />
      <Work />
      <Footer />
    </div>
  )
}

export default App