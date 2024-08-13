// src/App.js
import React from 'react';
import Home from '../src/Pages/Home/Home'
import Navbar from './NavBar Component/NavBar'
import Footer from './NavBar Component/CollectionShowcase/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstSlide from './NavBar Component/FirstSlide';
import Blog from './NavBar Component/CollectionShowcase/Blog';
import ProductList from './NavBar Component/CollectionShowcase/ProductList';
import Addtocart from './NavBar Component/CollectionShowcase/Addtocart';
import Account from './NavBar Component/CollectionShowcase/Account';
import ProductDisplay from './NavBar Component/CollectionShowcase/ProductDisplay';
import MJValues from './NavBar Component/CollectionShowcase/Value';








function App() {
  return (
    <div className="App">



      <BrowserRouter>
      <Navbar/>
         <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/firstslide' element={<FirstSlide/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/productpage' element={<ProductList/>}/>
          <Route path='/cart' element={<Addtocart/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path="/product" element={<ProductDisplay/>} />
         
          
          
          


         </Routes>
         <MJValues/>
       <Footer/>  
      </BrowserRouter>
      

     
    </div>
  );
}

export default App;