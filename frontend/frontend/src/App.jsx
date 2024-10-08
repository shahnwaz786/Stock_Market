import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import Product from './Product/Product'
import Pricing from './pricing/Pricing'
import Support from './Support/Support'
import Navbar from './Navbar'
import Footer from './Footer'
import Error from './Error'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
       <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/About' element={< About />}></Route>
        <Route path='/Product' element={< Product />}></Route>
        <Route path='/Pricing' element={< Pricing />}></Route>
        <Route path='/Support' element={< Support />}></Route>
        <Route path='*' element={< Error />}></Route>


       </Routes>
       <Footer />
    </BrowserRouter>
    </> 
  )
}

export default App