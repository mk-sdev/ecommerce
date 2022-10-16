import React, {useEffect, useState} from 'react'
import CartBook from './CartBook'

import {useSelector} from 'react-redux'
import {RootState} from '../redux/store'



export default function Cart() {
  const reservations = useSelector((state:RootState)=>state.reservations.value)

 const [cost, setCost] = useState(0)

  return (
    <div className='component'>Cart <br />

     {reservations[0]===undefined ?
        <img src={require('../images/empty.svg').default} className='image' width='200px' height='300px' ></img>
     :

      <>
      {
        reservations.map((a:any, i:any)=>{
        //  setCost(reservations[i][3]*reservations[i][4])
         return (
        <CartBook key={i} props={a}></CartBook>
         )})
      }

        {cost}
      </>
     }

      <br />
      <br />
      img

   

    

    </div>
  )
}
