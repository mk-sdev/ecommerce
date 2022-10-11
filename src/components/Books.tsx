import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/books.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping, faN}  from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function Books() {
  const harry = require("../images/covers/harry.png")
  const [harryImg, setHarryImg] = useState('')
  const [animalImg, setAnimalImg] = useState('')
  const [superImg, setSuperImg] = useState('')
  const [gatesImg, setGatesImg] = useState('')


  useEffect(()=>{
    //fn()
  })


     useEffect(()=>{


    // po gatunku:
    //     axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
    //     .then(res=>{ console.log(res.data)})
    //    .catch(err=>console.log(err))


    // po autorze:
      //   axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"Richard+Moreno"&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
      //   .then(res=>{ console.log(res.data)})
      //  .catch(err=>console.log(err))

         //ilość wyszukań oraz od którego indexu zacząć:
      //   axios.get(`https://www.googleapis.com/books/v1/volumes?q=dupa&maxResults=5&startIndex=2&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
      //   .then(res=>{ console.log(res.data)})
      //  .catch(err=>console.log(err))


    }, [])

  //1. obczaić jeszcze czy sa się wyszukać bez tytułu np po samym autorze lub gatunku. jeśli się da to dodać w Book.tsx opcję zobacz więcej od tego autora oraz w topnav wyszukiwanie po gatunku. Jak nie to dać warunek w inputach że musi być tytuł podany.
  //2. Druga kwestia to show more books, trzeba też to jakoś wykminić. Może dodać przycisk następnej strony.
  //3. trzecia rzecz taka, że ten oto komponent można wykorzystać zarówno podczas wyszukiwania lupą , search for more, ale także new, bestsellers i discounts. Jeśli uda sie wykminić wysszukiwanie bez tytułu (patrz punkt 1) to nie trzeba nawet dodawać ręcznie.

  //fucntion fn(){ pobieranie danych za API [wspomóc się repo tego gościa
//https://github.com/Kirti-salunkhe/OpenBook/blob/main/src/Components/Main.js   ] }


  return (
    <div className='component books' >

    <input type="text" placeholder='title'/>
    <input type="number" placeholder='year'/>
    <input type="text" placeholder='autor'/>
    <input type="text" placeholder='genre'/>
  //jeszcze po cenie i długosci
    

<div id='homeItems'>



<Link to='/book/8exSvgAACAAJ'><div className="item">
      <img src={'http://books.google.com/books/content?id=8exSvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Harry Potter and The Chamber of Secrets</div>
                <div className='price'>25$</div>
              </div>
      </div></Link>

      
      <Link to='/book/crbWwAEACAAJ'><div className="item">
      <img src={'http://books.google.com/books/content?id=crbWwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
      <div className='bestseller'>bestseller</div>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Animal liberation</div>
                <div className='price'>25$</div>
              </div>
      </div></Link>

      <Link to='/book/7_H8AwAAQBAJ'><div className="item">
      <img src={'http://books.google.com/books/content?id=7_H8AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Superintelligence</div>
                <div className='price'>25$</div>
              </div>
      </div></Link>

      <Link to='/book/oeAcYb_Gq8cC'><div className="item">
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

      <Link to='/book/xp5CvgAACAAJ'><div className="item">
      <img src={'http://books.google.com/books/content?id=xp5CvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Meditations</div>
                <div className='price'>25$</div>
              </div>
      </div></Link>

      <Link to='/book/wpfOoQEACAAJ'><div className="item">
      <img src={'http://books.google.com/books/content?id=wpfOoQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>World War II</div>
                <div className='price'>25$</div>
              </div>
      </div></Link>

      <Link to='/book/nc1UAAAAYAAJ'><div className="item">
      <img src={'http://books.google.com/books/content?id=nc1UAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Euclid's elements</div>
                <div className='price'>25$</div>
              </div>
      </div></Link>

      <Link to='/book/DqLPAAAAMAAJ'><div className="item">
      <img src={'http://books.google.com/books/content?id=_NsHAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
      <div className='bestseller'>bestseller</div>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>The Lord of The Rings</div>
                <div className='price'>25$</div>
              </div>
      </div></Link>

      <Link to='/book/PIypDwAAQBAJ'><div className="item">
      <img src={'http://books.google.com/books/content?id=PIypDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} alt="" className='bookImg'/>
      <div className='bestseller'>bestseller</div>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>Poor dad rich dad</div>
                <div className='price'>36.59$</div>
              </div>
      </div></Link>

      <Link to='/book/Uwn0CAAAQBAJ'><div className="item">
      <img src={'http://books.google.com/books/content?id=Uwn0CAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>The old man and the sea</div>
                <div className='price'>52.37$</div>
              </div>
      </div></Link>

      <Link to='/book/0fehDAAAQBAJ'><div className="item">
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

      <Link to='/book/8u9KEAAAQBAJ'><div className="item">
      <img src={'http://books.google.com/books/content?id=8u9KEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} alt="" className='bookImg'/>
               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>The Witcher Volume 6: Witch's Lament</div>
                <div className='price'>25$</div>
              </div>
      </div></Link>


<Link to='/books' id='moreBooks'>
  show more books
  </Link>
</div>

    </div>
  )
}
