//import { useState } from 'react'
/*import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Coupondescription from './Pages/Coupondescription'
import PageNotFound from './Pages/PageNotFound'
import CategoryCoupons from './Pages/CategoryCoupons'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      <Navbar />
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route exact path="/:category/:couponname" element={<Coupondescription />} />
          <Route exact path="/category/:categoryname" element={<CategoryCoupons />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        
        </div>
        
         
    </>
  )
}

export default App */


import React from "react";
import { Routes, Route } from "react-router-dom";
import Coupondescription from "./Pages/Coupondescription";
import PageNotFound from "./Pages/PageNotFound";
import CategoryCoupons from "./Pages/CategoryCoupons";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar Hovering Over Content */}
      <div className="absolute w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="pt-30 md:pt-20"> {/* Adjusted padding to prevent content from hiding behind navbar */}
        <Routes>
          <Route exact  path="/Frontend/" element={<Home />} />
          <Route exact path="/Frontend/description/:id" element={<Coupondescription />} />
          <Route exact path="/Frontend/category/:category" element={<CategoryCoupons />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

