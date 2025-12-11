import { useState } from 'react'
import './App.css'
import {NavBar, MainHeroCard, WhatIDo, CallToAction} from './components/index.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <MainHeroCard/>
      <WhatIDo/>
      <CallToAction/>
    </>
  )
}

export default App
