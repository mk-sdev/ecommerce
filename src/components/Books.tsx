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

  //1. obczaić jeszcze czy sa się wyszukać bez tytułu np po samym autorze lub gatunku. jeśli się da to dodać w Book.tsx opcję zobacz więcej od tego autora. Jak nie to dać warunek w inputach że musi być tytuł podany.
  //2. Druga kwestia to show more books, trzeba też to jakoś wykminić.
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



<div className="item">{harryImg==='' ? 'Loading...' :
          <img src={harryImg} alt="" className='bookImg'/>}
          <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Harry Potter and The Chamber of Secrets</div>
          <div className='price'>50$</div>
        </div>
</div>


<div className="item">{animalImg==='' ? 'Loading...' :
          <img src={animalImg} alt="" className='bookImg'/>}
          <div className='bestseller'>bestseller</div>
          <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Animal liberation</div>
          <div className='price'>50$</div>
        </div>
</div>

<div className="item">{superImg==='' ? 'Loading...' :
          <img src={superImg} alt="" className='bookImg'/>}
         <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Superintelligence</div>
          <div className='price'>50$</div>
        </div>
</div>

<div className="item">{gatesImg==='' ? 'Loading...' :
          <img src={gatesImg} alt="" className='bookImg'/>}
         <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Who is Bill Gates?</div>
          <div className='price'>50$</div>
        </div>
</div>

<div className="item">
<img src={String(harry)} alt="" className='bookImg'/>
         <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Harry Potter and The Chamber of Secrets</div>
          <div className='price'>50$</div>
        </div>
</div>

<Link to='/books/itemm/1'><div className="item">
<img src={'http://books.google.com/books/content?id=crbWwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'} alt="" className='bookImg'/>
         <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Harry Potter and The Chamber of Secrets</div>
          <div className='price'>50$</div>
        </div>
</div></Link>

<div className="item">
<img src={String(harry)} alt="" className='bookImg'/>
{/* <div className='bestseller'>bestseller</div> */}
         {/* <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} /> */}
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Harry Potter and The Chamber of Secrets</div>
          <div className='price'>50$</div>
        </div>
</div>

<div className="item">
<img src={String(harry)} alt="" className='bookImg'/>
         <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Harry Potter and The Chamber of Secrets</div>
          <div className='price'>50$</div>
        </div>
</div>

<div className="item">
   <img src={String(harry)} alt="" className='bookImg'/>
         <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Harry Potter and The Chamber of Secrets</div>
          <div className='price'>50$</div>
        </div>
</div>

<div className="item">
   <img src={String(harry)} alt="" className='bookImg'/>
         <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Harry Potter and The Chamber of Secrets</div>
          <div className='price'>50$</div>
        </div>
</div>

<div className="item">
   <img src={String(harry)} alt="" className='bookImg'/>
         <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Harry Potter and The Chamber of Secrets</div>
          <div className='price'>50$</div>
        </div>
</div>

<div className="item">
   <img src={String(harry)} alt="" className='bookImg'/>
         <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
        <div className="data">
          <br />
          <br />
          <br />
          <div className='title'>Harry Potter and The Chamber of Secrets</div>
          <div className='price'>50$</div>
        </div>
</div>


<Link to='/books' id='moreBooks'>
  show more books
  </Link>
</div>

    </div>
  )
}
