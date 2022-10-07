import React, {useState, useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons'
import {faUser}  from '@fortawesome/free-solid-svg-icons'
import {faBasketShopping}  from '@fortawesome/free-solid-svg-icons'
import {faSquareXmark}  from '@fortawesome/free-solid-svg-icons'
import {faBars}  from '@fortawesome/free-solid-svg-icons'
import '../styles/topnav.css'
const logo = require("../images/logo.png")


export default function Topnav() {
  
  const [search, setSearch] = useState('-100px')
  const [menu, setMenu] = useState(true)
  const searchBar = React.useRef<HTMLInputElement>(null);



  return (
    <>
    <div id='topBar' className='w-screen top-0'>
    <img id='topBarLogo' src={String(logo)} alt="" width='150px' className='hover:cursor-pointer' />

    <div id="topBarLinks" className={`text-black font-semibold ${!menu && 'open'}`}>
      <a href="#" >NEW</a>
      <a href="#">BESTSELLERS</a>
      <a href="#">DISCOUNTS</a>
    <FontAwesomeIcon id='xMark' className='text-red-500 hover:text-red-400' icon={faSquareXmark} onClick={e=>setMenu(true)} />
    </div>

    <div id="topBarIcons" className='w-4/12 '>
    <FontAwesomeIcon className='topBarIcons text-black hover:cursor-pointer text-3xl' icon={ faHouse} />
    <FontAwesomeIcon className='topBarIcons text-black hover:cursor-pointer text-3xl' icon={faMagnifyingGlass} 
    onClick={e=>{ searchBar.current?.focus(); search==='100px' ? setSearch('-100px') : setSearch('100px')}} />
    <FontAwesomeIcon className='topBarIcons text-black hover:cursor-pointer text-3xl' icon={faUser} />
    <div id="basket">
    <span id="notification" className='bg-red-500 rounded-full bottom-0 left-0'></span>
    <FontAwesomeIcon className='topBarIcons text-black hover:cursor-pointer text-3xl' icon={faBasketShopping} />
    </div>
    <FontAwesomeIcon id='hamburger' className='topBarIcons text-black hover:cursor-pointer text-3xl' icon={faBars} onClick={e=>{setMenu(false); setSearch('-100px')}} />
    </div>


    </div>

      <div id="searchBar" className='rounded-md text-black font-semibold' 
      style={{top: search}}>
        <input id='searchInput' className='rounded-l-md ' placeholder='type any title' type='text' ref={searchBar} ></input>
        <FontAwesomeIcon className=' text-dimgray hover:cursor-pointer text-md md:text-2xl' icon={faMagnifyingGlass} />
        
        <FontAwesomeIcon style={{position: 'absolute', top: '-100%', right: '0px'}} className='text-red-500 text-3xl hover:text-red-400' icon={faSquareXmark} onClick={e=>setMenu(true)} />

      </div>

    </>
  )
}
