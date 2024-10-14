import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Particles from './components/Particles'
import Head from './components/Head/Head'

const App = ()=>{
  return (
    <div className="app">
      <Navbar></Navbar>
      <Head/>
      <Particles id="particles"/>
    </div>
  )
}

export default App