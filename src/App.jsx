import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { MyFooter } from './Components/myFooter'
import { MainPage } from './Components/MainPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar /> */}
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
