import React, {useState, useEffect} from 'react'
import '../styles/home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faQuoteLeft, faQuoteRight}  from '@fortawesome/free-solid-svg-icons'
import {faBasketShopping}  from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { convertCompilerOptionsFromJson, setConstantValue } from 'typescript'
import {Link} from 'react-router-dom'

export default function Home() {

  // const [timer, setTimer] = useState(0);

  // useEffect(()=>{
  //   setInterval(()=>{
  //     setTimer(time => time === 21 ? 0 : time + 1);
  //   }, 1000)
  // }, [])

const [imag, setImag] = useState('')

  axios.get('https://www.googleapis.com/books/v1/volumes?q=animalliberation&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o')
  .then(res=>{console.log(res.data.items[1].volumeInfo.imageLinks.thumbnail)
    ;setImag(res.data.items[1].volumeInfo.imageLinks.thumbnail)})
  .catch(err=>console.log(err))

  const harry = require("../images/covers/harry.png")
  const animals = require("../images/covers/animals.png")
  return (
    <div className='component' >
    
    {/* <img id='books' src={String(books)} alt="" className='hover:cursor-pointer mx-auto'  /> */}

    <div id="books" className='w-full bg-black'>
      <p className='text-slate-100 relative' >Welcome to <span className='whitespace-nowrap'>Book Store</span></p>  
      <p className='text-slate-100 relative' >Looking for a book? Book Store is a place for you!</p>  
      <FontAwesomeIcon id='caret' icon={faCaretDown} className='text-slate-100 absolute'/>
      <div id="books1" className='w-full h-full absolute'></div>
      <div id="books2" className='w-full h-full absolute'></div>
    </div>

    <div id='homeItems'>
      <div className="item">
       
        <img src={String(harry)} alt="" className='w-full m-auto'/>
      
        <FontAwesomeIcon id='caret' icon={faBasketShopping} />

        <span>Harry Potter and The Chamber of Secrets</span>
        <br />
       <span>50$</span>
      </div>

      <div className="item hover:ease-linear duration-200 hover:scale-105">
      <img src={String(animals)} alt="" className='w-full m-auto '/>
      
      
    {/* <span className='h-full w-ful absolute bg-red-400' style={{opacity: '.5', top: '0', left: '0', background: 'red', width: '100%', height: '100%'}}>
    </span> */}
    <div className='bestseller'>bestseller</div>


      <span>Harry Potter</span>
      <br />
     <span>50$</span>
    <FontAwesomeIcon className='basket' icon={faBasketShopping} />
      </div>

      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>

      <Link to='/books' id='moreBooks'>
        show more books
        </Link>
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


    {/* <div id='opinions'>
      <p id='opinionsP' className='text-center'>Here are some opinions from people
      <br /> who found their books on Book Store:</p> */}

    {/* <div id="quotesdiv"> */}
     {/* {timer>=0 && timer<=7 && <div id='quote1' className="quotes">
        <p>
        <FontAwesomeIcon icon={faQuoteLeft} />
          &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quam tempora deserunt fuga accusantium <span style={{whiteSpace:'nowrap'}}>voluptatibus! &nbsp;
          <FontAwesomeIcon icon={faQuoteRight} /></span></p>

        <p className='autor'>~ Lisa, 21</p>
        <img src={require('../images/person1.svg').default} alt='mySvgImage' />
      </div>}


      {timer>7 && timer<=14 &&<div id='quote2' className="quotes">
        <p>
        <FontAwesomeIcon icon={faQuoteLeft} />
          &nbsp; Ullam saepe deserunt iusto? Molestiae delectus dolore placeat. Ipsum deserunt mollitia id quibusdam eveniet deleniti, quisquam labore fugit suscipit ipsam quis.<span style={{whiteSpace:'nowrap'}}> &nbsp;
          <FontAwesomeIcon icon={faQuoteRight} /></span></p>

        <p className='autor'>~ David, 34</p>
        <img src={require('../images/person2.svg').default} alt='mySvgImage' />
      </div>}


     {timer>14 && timer<=21 && <div id='quote3' className="quotes">
        <p>
        <FontAwesomeIcon icon={faQuoteLeft} />
          &nbsp; Quidem pariatur, consequuntur odio soluta reprehenderit mollitia cupiditate necessitatibus officia quia perspiciatis delectus obcaecati, magnam quis? Non, deleniti id totam temporibus aliquam repellat!<span style={{whiteSpace:'nowrap'}}> &nbsp;
          <FontAwesomeIcon icon={faQuoteRight} /></span></p>

        <p className='autor'>~ Valentina, 27</p>
        <img src={require('../images/person3.svg').default} alt='mySvgImage' />
      </div>} */}

      {/* </div> */}
    {/* </div> */}


    </div>
  )
}
