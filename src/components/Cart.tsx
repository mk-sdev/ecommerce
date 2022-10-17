import React, {useState, useEffect} from 'react'
import CartBook from './CartBook'
import '../styles/cart.css'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../redux/store'




export default function Cart() {

  const books = useSelector((state:RootState)=>state.books.value)

  const dispatch = useDispatch()




  return (
    <div className='component'>

     {
       (books && books[0]===undefined )
       ?
       <img src={require('../images/empty.svg').default} alt="" className='cartImage absolute inset-2/4  ' style={{maxWidth: '300px'}} ></img>
       :
       
       <>
       <button className='payBtn1 px-5 mt-5 right-5  bg-green-500 rounded-md border-2 my-auto hover:bg-green-600 border-green-600 border-2 transition'>I pay</button>
        <br />
      {
        books.map((a:any, i:any)=>{
         return (
        <CartBook key={i} props={a} ></CartBook>
         )})
      }


    <br />
    <div id="finalPrice" className='text-6xl p-5 px-10 text-right relative'>
      <hr className='absolute t-0 w-2/4 text-black-500'/>
    ={books.map((a:any, i:any)=>{
      return books[i][4]*books[i][3]
    }).reduce((a:any, i:any)=>{
      return (a+i)
    }).toFixed(2) }$ &nbsp;
    {/* <button className='payBtn2 text-green-500 hover:underline my-auto'>I pay</button> */}
    </div> 
      </>
     }





    </div>
  )
}
