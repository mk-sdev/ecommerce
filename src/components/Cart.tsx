import React, {useState, useEffect} from 'react'
import CartBook from './CartBook'
import '../styles/cart.css'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../redux/store'




export default function Cart() {

  const reservations = useSelector((state:RootState)=>state.reservations.value)

  const dispatch = useDispatch()




  return (
    <div className='component'>

     {
     (reservations && reservations[0]===undefined )
     ?
        <img src={require('../images/empty.svg').default} alt="" className='cartImage absolute inset-2/4  ' style={{maxWidth: '300px'}} ></img>
     :

      <>
        <br />
      {
        reservations.map((a:any, i:any)=>{
         return (
        <CartBook key={i} props={a} ></CartBook>
         )})
      }


    <br />
    <div id="finalPrice" className='text-6xl text-right p-5 relative bg-red-200'>
      <hr className='absolute t-0 w-2/4 text-black-500'/>
    {reservations.map((a:any, i:any)=>{
      return reservations[i][4]*reservations[i][3]
    }).reduce((a:any, i:any)=>{
      return (a+i)
    }).toFixed(2) }$ <button className='roudned bg-green-400 text-4xl my-auto'>I pay</button></div> 
      </>
     }





    </div>
  )
}
