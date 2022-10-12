import React from 'react';
import './App.css';
import Topnav from './components/Topnav';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import Books from './components/Books';
import Cart from './components/Cart'
import Footer from './components/Footer';
import Book from './components/Book'
function App() {
  return (
    <>


<Topnav></Topnav >


<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/books' element={<Books/>}></Route>
  <Route path='/books/:title' element={<Books/>}></Route>
  <Route path='/books/:title/:page' element={<Books/>}></Route>
  {/* <Route path='/books/:title/:nr' element={<Book/>}></Route> */}
  <Route path='/book/:id/' element={<Book/>}></Route>
</Routes>


<Footer></Footer>
    
   
    </>
  );
}

export default App;