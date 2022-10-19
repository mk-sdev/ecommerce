import React, {useEffect} from 'react';
import Topnav from './components/Topnav';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Books from './components/Books';
import Cart from './components/Cart'
import Footer from './components/Footer';
import Book from './components/Book'
import New from './components/New'
import Favourite from './components/Favourite'
import NotFound from './components/NotFound'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from './redux/store'
import { setBooks } from './redux/cart'
import { setFav } from './redux/fav'

function App() {
  const books = useSelector((state:RootState)=>state.books.value)
  const favbooks = useSelector((state:RootState)=>state.favbooks.value)
  const dispatch = useDispatch()

  useEffect(()=>{
    const B = localStorage.getItem('booksArray') ?  localStorage.getItem('booksArray') : null;

    const F = localStorage.getItem('favArray') ?  localStorage.getItem('favArray') : null;

  {  (typeof(B)==='string' && books.length===0) ?  dispatch(setBooks(JSON.parse(B))) : console.log('')}

  {  (typeof(F)==='string' && favbooks.length===0) ?  dispatch(setFav(JSON.parse(F))) : console.log('')}

  }, [])

  useEffect(()=>{
    localStorage.clear();
    localStorage.setItem('booksArray', JSON.stringify(books));
    localStorage.setItem('favArray', JSON.stringify(favbooks));
  }, [books, favbooks])
  
  return (
    <>
<Topnav></Topnav >

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/ecommerce' element={<Home/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/new' element={<New/>}></Route>
  <Route path='/bestsellers' element={<New/>}></Route>
  <Route path='/favourite' element={<Favourite/>}></Route>
  <Route path='/books' element={<Books/>}></Route>
  <Route path='/books/:title' element={<Books/>}></Route>
  <Route path='/books/:title/:page' element={<Books/>}></Route>
  <Route path='/book/:id/' element={<Book/>}></Route>
  <Route path='*' element={<NotFound/>}></Route>
</Routes>

<Footer></Footer>
    </>
  );
}

export default App;