import React from 'react'

export default function NotFound() {
  return (
    <div className='component'>
        
        <div className='w-full text-center bg-red-500 py-2 px-1 mb-10 font-normal' 
       style={{background: 'hsl(37, 95%, 71%)', fontFamily: 'Oswald', color: 'var(--dark)'}}
       >This page does not exist ;(</div>

         {/* <img src={require('../images/notfound.svg').default} alt="" className='cartImage absolute inset-2/4  ' style={{maxWidth: '300px'}} ></img> */}

         <img src={require('../images/notfound.svg').default} alt="" className='w-full m-auto' style={{maxWidth: '300px', marginTop: '10%', translate: '0 -10%'}}  />
    </div>
  )
}
