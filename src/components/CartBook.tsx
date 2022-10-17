import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import { changeQuantity, deleteBook, setQuantity} from '../redux/counter'



export default function CartBook(props:any) {

    const books = useSelector((state:RootState)=>state.books.value)


const [showDelete, setShowDelete] = useState(false)
const [Opacity, setOpacity] = useState('1')

const dispatch = useDispatch()

useEffect(()=>{
  console.log(props.props[3]*props.props[4])
  // dispatch(updateCost(props.props[3]*props.props[4]))
}, [])

const handleQuantity = (e:number, id:string)=>{
  console.log(props.props[3]*props.props[4])

  const whichArray = books.find((el:any)=>{return el[0]===id})
  const indx = books.indexOf(whichArray)
  dispatch(changeQuantity([e, indx]))

}

const handleQuantity2 = (e:number, id:string)=>{
  const whichArray = books.find((el:any)=>{return el[0]===id})
  const indx = books.indexOf(whichArray)

  if(e>1)
dispatch(setQuantity([e, indx]))
else
dispatch(setQuantity([1, indx]))
}

const del = (id:string)=>{
  const whichArray = books.find((el:any)=>{return el[0]===id})
  const indx = books.indexOf(whichArray)

    // dispatch(opacity(indx))
    setOpacity('0')
    setTimeout(()=>{
      
      dispatch(deleteBook(id))
      setOpacity('1')
      setShowDelete(false)
    }, 500)
  // document.querySelector(id)!setAttribute("style", "display: none");

}

  return (
    // <div>{props.props}</div>
    
        
          <div id={props.props[0]}  className='cartBook'
          style={{opacity: Opacity, transition: 'opacity .5s', 
          backgroundColor: Opacity==='1' ? 'transparent' : 'rgb(255, 0, 0, .5)'   }} >
            <Link  to={`/book/${props.props[0]}`} className='inline-block'>
         <span className='cartTitle'>{props.props[2]}, {props.props[3]}$</span> 
            <img src={`${props.props[1]}`} alt="" width='200px' height='500px'  />
          </Link>

        <div id="right" >
          <p className='text-center text-2xl mt-5'>define quantity</p>
            <div className="buttons" >

                <button className='plus' onClick={e=>{handleQuantity(1, props.props[0])}}>+</button>
                <span className='quantity'>{props.props[4]}</span>
              
                {
                props.props[4] >=2 ?
                <button className='minus' onClick={e=>{handleQuantity(-1, props.props[0])}}>-</button>
                :
                <button className='minusDisabled' ></button>
                }
            </div>
            <input type="number" className='w-full'
     value={props.props[4]}
     onChange={e=>handleQuantity2(+e.target.value, props.props[0])} />
<br />
{!showDelete  ?
            <button className='delete text-3xl bg-red-400 border-4 border-red-500 p-auto hover:bg-red-500 transition  rounded-lg' onClick={e=>setShowDelete(true)}>delete &nbsp;
            {/* <span> */}
             <FontAwesomeIcon className='hover:cursor-pointer text-2xl' icon={ faTrash} />
             {/* </span> */}
             </button>
:
            <>
              <p className='w-full text-center'>Are you sure you want to remove this item?</p>
             <div className="deleteModal">
              <button onClick={e=>del(props.props[0])} className='text-red-500 hover:underline'>Yes, delete it</button>
              <br />
              <button onClick={e=>setShowDelete(false)} className='text-green-500 hover:underline'>I changed my mind</button>
            </div></>}
            </div>
          </div>
        
      
  )
}
