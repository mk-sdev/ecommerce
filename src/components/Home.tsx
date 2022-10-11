import React, {useState, useEffect, forwardRef} from 'react'
import '../styles/home.css'
import '../styles/books.css'
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

// const array=['harrypotter', 'animalliberation', 'billgates']
const [starwarsImg, setStarwarsImg] = useState('')
//thelittleprince
const [princeImg, setPrinceImg] = useState('')
//euclidselements
const [witcherImg, setWitcherImg] = useState('')
// const [gatesImg, setGatesImg] = useState('')

useEffect(()=>{
    
    // axios.get(`https://www.googleapis.com/books/v1/volumes?q=starwars&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
    // .then(res=>{setStarwarsImg(res.data.items[1].volumeInfo.imageLinks.thumbnail)})
    // .catch(err=>console.log(err))

  //   axios.get(`https://www.googleapis.com/books/v1/volumes?q=meditations&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
  //   .then(res=>{setPrinceImg(res.data.items[1].volumeInfo.imageLinks.thumbnail);
  // console.log(res.data.items[1].volumeInfo.imageLinks.thumbnail)})
  //   .catch(err=>console.log(err))
    
    // axios.get(`https://www.googleapis.com/books/v1/volumes?q=witcher&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
    // .then(res=>{setWitcherImg(res.data.items[0].volumeInfo.imageLinks.thumbnail)})
    // .catch(err=>console.log(err))
    
  //   axios.get(`https://www.googleapis.com/books/v1/volumes?q=billgates&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
  //   .then(res=>{setGatesImg(res.data.items[1].volumeInfo.imageLinks.thumbnail)})
  //   .catch(err=>console.log(err))

    // array.map((el, i)=>{
    //   axios.get(`https://www.googleapis.com/books/v1/volumes?q=${el}&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
    //   .then(res=>{

    //    if(i===0) setHarryImg(res.data.items[1].volumeInfo.imageLinks.thumbnail);
    //    else if (i===1) setAnimalImg(res.data.items[1].volumeInfo.imageLinks.thumbnail);
    //    else if (i===2) setGatesImg(res.data.items[1].volumeInfo.imageLinks.thumbnail);
    //   })
    //   .catch(err=>console.log(err))
  
    // })

}, [])


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

    {/* {imag.1} */}
    <div id='homeItems'>

      <div id='recommended'>Recommended by Book Store</div>

    <Link to='/books/harrypotter/0'><div className="item">
      <img src={'http://books.google.com/books/content?id=8exSvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Harry Potter and The Chamber of Secrets</div>
                <div className='price'>50$</div>
              </div>
      </div></Link>

      
      <Link to='/books/animalliberation/1'><div className="item">
      <img src={'http://books.google.com/books/content?id=crbWwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
      <div className='bestseller'>bestseller</div>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Animal liberation</div>
                <div className='price'>50$</div>
              </div>
      </div></Link>

      <Link to='/books/superintelligence/0'><div className="item">
      <img src={'http://books.google.com/books/content?id=7_H8AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Superintelligence</div>
                <div className='price'>50$</div>
              </div>
      </div></Link>

      <Link to='/books/billgates/1'><div className="item">
      <img src={'http://books.google.com/books/content?id=oeAcYb_Gq8cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Who Is Bill Gates?</div>
                <div className='price'>28.49$</div>
              </div>
      </div></Link>

      <Link to='/books/meditations/0'><div className="item">
      <img src={'http://books.google.com/books/content?id=xp5CvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Meditations</div>
                <div className='price'>50$</div>
              </div>
      </div></Link>

      <Link to='/books/ww2/0'><div className="item">
      <img src={'http://books.google.com/books/content?id=wpfOoQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>WW2</div>
                <div className='price'>50$</div>
              </div>
      </div></Link>

      <Link to='/books/euclidselements/0'><div className="item">
      <img src={'http://books.google.com/books/content?id=nc1UAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Euclid's elements</div>
                <div className='price'>50$</div>
              </div>
      </div></Link>

      <Link to='/books/thelordoftherings/0'><div className="item">
      <img src={'http://books.google.com/books/content?id=_NsHAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
      <div className='bestseller'>bestseller</div>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>The Lord of The Rings</div>
                <div className='price'>50$</div>
              </div>
      </div></Link>

      <Link to='/books/poordadrichdad/1'><div className="item">
      <img src={'http://books.google.com/books/content?id=PIypDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} alt="" className='bookImg'/>
      <div className='bestseller'>bestseller</div>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Poor dad rich dad</div>
                <div className='price'>50$</div>
              </div>
      </div></Link>

      <Link to='/books/theoldmanandthesea/0'><div className="item">
      <img src={'http://books.google.com/books/content?id=Uwn0CAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>The old man and the sea</div>
                <div className='price'>50$</div>
              </div>
      </div></Link>

      <Link to='/books/thelittleprince/0'><div className="item">
      <img src={'http://books.google.com/books/content?id=0fehDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Tle little prince</div>
                <div className='price'>9,33$</div>
              </div>
      </div></Link>

      <Link to='/books/witcher/0'><div className="item">
      <img src={'http://books.google.com/books/content?id=8u9KEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Witcher</div>
                <div className='price'>50$</div>
              </div>
      </div></Link>


      <Link to='/books/dupa' id='moreBooks'>
        search for more books
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
