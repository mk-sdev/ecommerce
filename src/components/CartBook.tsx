import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import { changeQuantity, deleteBook } from '../redux/counter'



export default function CartBook(props:any) {

    const reservations = useSelector((state:RootState)=>state.reservations.value)

const [showDelete, setShowDelete] = useState(false)
const [Opacity, setOpacity] = useState('1')

const dispatch = useDispatch()

const handleQuantity = (e:number, id:string)=>{
  const whichArray = reservations.find((el:any)=>{return el[0]===id})
  const indx = reservations.indexOf(whichArray)
  dispatch(changeQuantity([e, indx]))
}

const del = (id:string)=>{
  const whichArray = reservations.find((el:any)=>{return el[0]===id})
  const indx = reservations.indexOf(whichArray)

    // dispatch(opacity(indx))
    setOpacity('0')
    setTimeout(()=>{

      dispatch(deleteBook(id))
    }, 600)
  // document.querySelector(id)!setAttribute("style", "display: none");
  console.log(typeof(id))
}

  return (
    // <div>{props.props}</div>
    
        
          <div id={props.props[0]}  
          style={{opacity: Opacity, transition: 'opacity .5s', 
          backgroundColor: Opacity==='1' ? 'transparent' : 'red'   }} >
            <Link  to={`/book/${props.props[0]}`}>
          {props.props[2]}
            <img src={`${props.props[1]}`} alt="" width='200px' height='500px' />


          </Link>

            <div id="buttons" className='mt-5'>

                <button id='plus' onClick={e=>handleQuantity(1, props.props[0])}>+</button>
                <span id='quantity'>{props.props[4]}</span>
              
                {
                props.props[4] >=2 ?
                <button id='minus' onClick={e=>handleQuantity(-1, props.props[0])}>-</button>
                :
                <button id='minusDisabled'>-</button>
                }
            </div>
            <button id="delete"  className='text-3xl' onClick={e=>setShowDelete(true)}>delete</button>

            {showDelete && <div className="deleteModal absolute text-red-500">
              <button onClick={e=>del(props.props[0])}>delete</button>
              <br />
              <button onClick={e=>setShowDelete(false)}>I changed my mind</button>
            </div>}

          </div>
        
      
  )
}
