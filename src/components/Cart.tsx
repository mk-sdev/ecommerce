import React, {useState, useEffect} from 'react'
import CartBook from './CartBook'

import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../redux/store'




export default function Cart() {

  const reservations = useSelector((state:RootState)=>state.reservations.value)

  const dispatch = useDispatch()




  return (
    <div className='component'>Cart <br />

     {(reservations && reservations[0]===undefined )?
        <img src={require('../images/empty.svg').default} className='image' width='200px' height='300px' ></img>
     :

      <>
      {
        reservations.map((a:any, i:any)=>{
         return (
        <CartBook key={i} props={a} ></CartBook>
         )})
      }


    <br />
    {reservations.map((a:any, i:any)=>{
      return reservations[i][4]*reservations[i][3]
    }).reduce((a:any, i:any)=>{
      return a+i
    }) }
      </>
     }

      <br />
      <br />
      img

   

    

    </div>
  )
}
