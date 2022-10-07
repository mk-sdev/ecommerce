import React from 'react'
import '../styles/home.css'

const books = require("../images/books.jpg")

export default function Home() {
  return (
    <div className='component' >
    
    {/* <img id='books' src={String(books)} alt="" className='hover:cursor-pointer mx-auto'  /> */}

    <div id="books" className='w-full text-slate-100'>Welcome to Book Store</div>
    </div>
  )
}
