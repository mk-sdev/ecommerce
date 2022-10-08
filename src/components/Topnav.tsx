import React, {useState, useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons'
import {faUser}  from '@fortawesome/free-solid-svg-icons'
import {faBasketShopping}  from '@fortawesome/free-solid-svg-icons'
import {faSquareXmark}  from '@fortawesome/free-solid-svg-icons'
import {faBars}  from '@fortawesome/free-solid-svg-icons'
import '../styles/topnav.css'
import {Link} from 'react-router-dom'
const logo = require("../images/logo.png")

export default function Topnav() {
  
  const [search, setSearch] = useState('-100px')
  const [menu, setMenu] = useState(true)
  const searchBar = React.useRef<HTMLInputElement>(null);

  return (
    <>

    <div id='topBar' className='w-screen top-0 z-10'>
    <img id='topBarLogo' src={String(logo)} alt="" width='150px' className='hover:cursor-pointer' />

    <div id="topBarLinks" className={`text-black font-semibold ${!menu && 'open'}`}>
      <Link to='/books/new'>NEW</Link>
      <Link to='/books/bestsellers'>BESTSELLERS</Link>
      <Link to='/books/discounts'>DISCOUNTS</Link>
    <FontAwesomeIcon id='xMark' className='text-red-500 hover:text-red-400' icon={faSquareXmark} onClick={e=>setMenu(true)} />
    </div>


  <div id="topBarIcons">
    <Link to='/'>
    <FontAwesomeIcon className='topBarIcons text-black hover:cursor-pointer text-2xl' icon={ faHouse} />
    </Link>

    <FontAwesomeIcon className='topBarIcons text-black hover:cursor-pointer text-2xl' icon={faMagnifyingGlass} 
    onClick={e=>{ searchBar.current?.focus(); search==='100px' ? setSearch('-100px') : setSearch('100px')}} />

    <Link to='/profile'>
    <FontAwesomeIcon className='topBarIcons text-black hover:cursor-pointer text-2xl' icon={faUser} />
    </Link>

    <div id="basket">
    <Link to='/cart'>
    <span id="notification" className='bg-red-500 rounded-full bottom-0 left-0'></span>
    <FontAwesomeIcon className='topBarIcons text-black hover:cursor-pointer text-2xl' icon={faBasketShopping} />
    </Link>
    </div>

    <FontAwesomeIcon id='hamburger' className='topBarIcons text-black hover:cursor-pointer text-2xl' icon={faBars} onClick={e=>{setMenu(false); setSearch('-100px')}} />
    </div>
  </div>

    <div id="searchBar" className='rounded-md text-black font-semibold z-10' 
      style={{top: search}}>
      <input id='searchInput' className='rounded-l-sm ' placeholder='type any title' type='text' ref={searchBar} ></input>
      <FontAwesomeIcon id='glass' className=' text-dimgray hover:cursor-pointer text-md md:text-xl' icon={faMagnifyingGlass} onClick={e=>setSearch('-100px')}  />
      
      <div id="shadow"></div>
      {/* <FontAwesomeIcon style={{position: 'absolute', top: '-100%', right: '0px'}} className='text-red-500 text-3xl hover:text-red-400' icon={faSquareXmark} onClick={e=>setMenu(true)} /> */}
    </div>

    </>
  )
}
