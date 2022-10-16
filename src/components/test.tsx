import React, {useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import { addReservation } from '../redux/counter'

export default function Test() {

    const reservations = useSelector((state:RootState)=>state.reservations.value)
    const dispatch = useDispatch()
    const [add, setAdd] = useState('')

const handleClick = ()=>{
    dispatch(addReservation(add))
}

  return (
    <div>test
        <br />
        <input type="text" value={add} onChange={e=>setAdd(e.target.value)} 
        className='bg-red-200'/>
        <button onClick={e=>handleClick()}>add   </button>
        {reservations}
    </div>
  )
}
