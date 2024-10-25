import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Head from './components/Head/Head'
import Relogio from './components/Relogio/Relogio'

const App = ()=>{
  return (
    <div className="app">
      <Navbar></Navbar>
      <Head/>
      <Relogio></Relogio>
  
    </div>
  )
}

export default App