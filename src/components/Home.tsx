import React, {useState, useEffect} from 'react'
import '../styles/home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown}  from '@fortawesome/free-solid-svg-icons'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import {faQuoteRight} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [state, setState] = useState(1)

  useEffect(()=>{

    setInterval(()=>{
      state===3 ? setState(1) : setState(state + 1)
      console.log(state)
    },7000)

  }, [])

  return (
    <div className='component' >
    
    {/* <img id='books' src={String(books)} alt="" className='hover:cursor-pointer mx-auto'  /> */}

    <div id="books" className='w-full bg-black'>
      <p className='text-slate-100 relative' >Welcome to Book Store</p>  
      <p className='text-slate-100 relative' >Looking for a book? Book Store is a place for you!</p>  
      <FontAwesomeIcon id='caret' icon={faCaretDown} className='text-slate-100 absolute'/>
      <div id="books1" className='w-full h-full absolute'></div>
      <div id="books2" className='w-full h-full absolute'></div>

    </div>




    <div id='whyUs' className='mt-0' >

    <p id='whyUsP' className=' text-center mx-auto'>Why should you order your books in Book Store? <br /> Here are 3 reasons:</p>

    <div id="reasons">
      <div>
       <p className=' w-fit mx-auto  text-center'>We offer over 10,000 books of all genres</p>
      
       <img src={require('../images/books.svg').default} alt='mySvgImage' />
       </div>

       <div>
       <p className=' w-fit mx-auto  text-center'>The prices are low, on average you pay 20% <br /> less than with competetive companies</p>
      
       <img src={require('../images/money.svg').default} alt='mySvgImage' />
       </div>

       <div>
       <p className=' w-fit mx-auto  text-center'>We provide a quick delivery
       <br /> (up to 2 business days)</p>
      
       <img src={require('../images/delivery.svg').default} alt='mySvgImage' />
       </div>
    </div>

    </div>


    <div id='opinions'>
      <p id='opinionsP' className='text-center'>Here are some opinions from people
      <br /> who found their books on Book Store:</p>


      {state && <div id='quote1' className="quotes">
        <p>
        <FontAwesomeIcon icon={faQuoteLeft} />
          &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quam tempora deserunt fuga accusantium <span style={{whiteSpace:'nowrap'}}>voluptatibus! &nbsp;
          <FontAwesomeIcon icon={faQuoteRight} /></span></p>

        <p className='autor'>~ Lisa, 21</p>
        <img src={require('../images/person1.svg').default} alt='mySvgImage' />
      </div>}


      {state && <div id='quote2' className="quotes">
        <p>
        <FontAwesomeIcon icon={faQuoteLeft} />
          &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quam tempora deserunt fuga accusantium <span style={{whiteSpace:'nowrap'}}>voluptatibus! &nbsp;
          <FontAwesomeIcon icon={faQuoteRight} /></span></p>

        <p className='autor'>~ David, 34</p>
        <img src={require('../images/person2.svg').default} alt='mySvgImage' />
      </div>}


      {state && <div id='quote3' className="quotes">
        <p>
        <FontAwesomeIcon icon={faQuoteLeft} />
          &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quam tempora deserunt fuga accusantium <span style={{whiteSpace:'nowrap'}}>voluptatibus! &nbsp;
          <FontAwesomeIcon icon={faQuoteRight} /></span></p>

        <p className='autor'>~ Valentina, 27</p>
        <img src={require('../images/person3.svg').default} alt='mySvgImage' />
      </div>}

    </div>



    </div>
  )
}
