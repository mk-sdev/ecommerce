import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'

export default function Topnav() {
  return (
    <div className='w-screen top-0' style={{background: 'red', position: 'fixed'}} >Topnav
    <FontAwesomeIcon icon={ faHouse} />
    </div>
  )
}
