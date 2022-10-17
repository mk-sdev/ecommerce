import React, {useEffect} from 'react';
import './App.css';
import Topnav from './components/Topnav';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import Books from './components/Books';
import Cart from './components/Cart'
import Footer from './components/Footer';
import Book from './components/Book'
import NotFound from './components/NotFound'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from './redux/store'
import { setBooks } from './redux/counter'

function App() {
  const books = useSelector((state:RootState)=>state.books.value)
  const dispatch = useDispatch()

  useEffect(()=>{
    const cat = localStorage.getItem('booksArray') ?  localStorage.getItem('booksArray') : null;


    (typeof(cat)==='string' && books.length===0) ?  dispatch(setBooks(JSON.parse(cat))) : console.log('')
  }, [])

  useEffect(()=>{
    localStorage.clear();
    localStorage.setItem('booksArray', JSON.stringify(books));
    const cat = localStorage.getItem('booksArray');
    (typeof(cat)==='string' ) ?  console.log(JSON.parse(cat)) : console.log('')
  }, [books])

  return (
    <>


<Topnav></Topnav >


<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/ecommerce' element={<Home/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/books' element={<Books/>}></Route>
  <Route path='/books/:title' element={<Books/>}></Route>
  <Route path='/books/:title/:page' element={<Books/>}></Route>
  {/* <Route path='/books/:title/:nr' element={<Book/>}></Route> */}
  <Route path='/book/:id/' element={<Book/>}></Route>
  <Route path='*' element={<NotFound/>}></Route>
</Routes>


<Footer></Footer>
    
   
    </>
  );
}

export default App;