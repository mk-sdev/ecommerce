import React from 'react'
import '../styles/home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown}  from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className='component' >
    
    {/* <img id='books' src={String(books)} alt="" className='hover:cursor-pointer mx-auto'  /> */}

    <div id="books" className='w-full bg-black'>
      <p className='text-slate-100 relative' >Welcome to Book Store</p>  
      <p className='text-slate-100 relative' >Looking for a book? Book Store is a place for you!</p>  
      <FontAwesomeIcon id='caret' icon={faCaretDown} className='text-slate-100 relative'/>
      <div id="books1" className='w-full h-full absolute'></div>
      <div id="books2" className='w-full h-full absolute'></div>

    </div>




    <div id='whyUs' className=' mt-0 ' >

    <p className=' w-fit mx-auto'>Why should you order your books in Book Store? Here are 3 reasons:</p>

    <div id="reasons">
       <p className=' w-fit mx-auto'>We offer over 10,000 books of all genres</p>
      
       <p className=' w-fit mx-auto'>The prices are low, on average you pay 20% less than with competetive companies</p>
      
       <p className=' w-fit mx-auto'>We provide a quick delivery (up to 2 business days)</p>
      
       <img src={require('../images/books.svg').default} alt='mySvgImage' width='300px' />
        
       <img src={require('../images/money.svg').default} alt='mySvgImage' width='300px' />
      
       <img src={require('../images/delivery.svg').default} alt='mySvgImage' width='300px' />
    </div>


    </div>






    </div>
  )
}
