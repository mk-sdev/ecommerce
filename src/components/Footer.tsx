import React from 'react'
import '../styles/footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faPinterest, faTwitter}  from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
    <div id='footer' className='relative'>

    <div id="footerLinks" className='relative'>
      <Link to='*' >STATUT</Link>·
      <Link to='*' >PAYMENT</Link>·
      <Link to='*' >CONTACT</Link>·
      <Link to='*' >DELIVERY</Link>·
      <Link to='*' >FAQ</Link>
    </div>

    <div id="socials" className='relative'>
    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className='footerIcons text-3xl' /></a>
    <a href="https://pl.pinterest.com/"><FontAwesomeIcon icon={faPinterest} className='footerIcons text-3xl' /></a>
    <a href="https://twitter.com/home"><FontAwesomeIcon icon={faTwitter} className='footerIcons text-3xl' /></a>
    </div>

    <p id='copyright' className='relative'>Copyright © 2022 BookStore.</p>
    </div>
    </>
  )
}
