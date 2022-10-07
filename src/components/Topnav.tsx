import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons'
import {faUser}  from '@fortawesome/free-solid-svg-icons'
import {faBasketShopping}  from '@fortawesome/free-solid-svg-icons'
// import logo from "logo.png"

export default function Topnav() {
  
  return (
    <div className='w-screen top-0' style={{background: 'red', position: 'fixed'}} >
      {/* <img src={'./logo.png'} alt="" /> */}
    <FontAwesomeIcon icon={ faHouse} />
    <FontAwesomeIcon icon={faMagnifyingGlass} />
    <FontAwesomeIcon icon={faUser} />
    <FontAwesomeIcon icon={faBasketShopping} />
    </div>
  )
}
