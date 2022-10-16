import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import { changeQuantity, deleteBook, opacity } from '../redux/counter'

export default function Cart() {
  
  const reservations = useSelector((state:RootState)=>state.reservations.value)

  // const [showDelete, setShowDelete] = useState(reservations.map(()=>{
  //   return false
  // }))

  const dispatch = useDispatch()
  
  const handleQuantity = (e:number, id:string)=>{
    const whichArray = reservations.find((el:any)=>{return el[0]===id})
    const indx = reservations.indexOf(whichArray)
    dispatch(changeQuantity([e, indx]))
  }

  const del = (id:string)=>{
    const whichArray = reservations.find((el:any)=>{return el[0]===id})
    const indx = reservations.indexOf(whichArray)

      dispatch(opacity(indx))
      setTimeout(()=>{

        dispatch(deleteBook(id))
      }, 600)
    // document.querySelector(id)!setAttribute("style", "display: none");
    console.log(typeof(id))
  }

  return (
    <div className='component'>Cart <br />

     {reservations[0]===undefined ?
        <img src={require('../images/empty.svg').default} className='image' width='200px' height='300px' ></img>
     :
      reservations.map((a:any, i:any)=>{
        return (
          <div id={reservations[i][0]}  key={i}
          style={{opacity: reservations[i][5], transition: 'opacity .5s', 
          backgroundColor: reservations[i][5]==='1' ? 'transparent' : 'red'   }} >
            <Link  to={`/book/${reservations[i][0]}`}>
          {reservations[i][2]}
            <img src={`${reservations[i][1]}`} alt="" width='200px' height='500px' />


          </Link>

            <div id="buttons" className='mt-5'>

                <button id='plus' onClick={e=>handleQuantity(1, reservations[i][0])}>+</button>
                <span id='quantity'>{reservations[i][4]}</span>
              
                {
                reservations[i][4] >=2 ?
                <button id='minus' onClick={e=>handleQuantity(-1, reservations[i][0])}>-</button>
                :
                <button id='minusDisabled'>-</button>
                }
            </div>
            <button id="delete"  className='text-3xl' onClick={e=>del(reservations[i][0])}>delete</button>

            <div className="deleteModal absolute text-red-500">
              <button onClick={e=>del(reservations[i][0])}>delete</button>
              <br />
              <button>I changed my mind</button>
            </div>

          </div>
        )
      }) }

      <br />
      <br />
      img
      {reservations[0]}

    

    </div>
  )
}
