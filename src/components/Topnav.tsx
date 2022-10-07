import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons'
import {faUser}  from '@fortawesome/free-solid-svg-icons'
import {faBasketShopping}  from '@fortawesome/free-solid-svg-icons'
const logo = require("./logo.png")


export default function Topnav() {
  
  return (
    <div className='w-screen top-0' style={{background: 'beige', position: 'fixed'}} >
    <img src={String(logo)} alt="" width='150px' className='hover:cursor-pointer' />

    <FontAwesomeIcon className='text-black hover:cursor-pointer' icon={ faHouse} />
    <FontAwesomeIcon className='text-black hover:cursor-pointer' icon={faMagnifyingGlass} />
    <FontAwesomeIcon className='text-black hover:cursor-pointer' icon={faUser} />
    <FontAwesomeIcon className='text-black hover:cursor-pointer' icon={faBasketShopping} />
    </div>
  )
}
