import React, {useEffect, useState} from 'react'
import { useParams, Link  } from 'react-router-dom'
import axios from 'axios'
import '../styles/book.css'

import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import { addReservation, changeQuantity } from '../redux/counter'

export default function Book() {

  const reservations = useSelector((state:RootState)=>state.reservations.value)
  const dispatch = useDispatch()
  
  // const {title} = useParams()
  const {id} = useParams()
  const [add, setAdd] = useState(id)
  const [image, setImage] = useState('')
    const [title1, setTitle1] = useState('')
    const [authors, setAuthors] = useState(['unknown'])
    const [pagecount, setPagecount] = useState('unknown')
    const [description, setDescription] = useState(`description not available`)
    const [date, setDate] = useState('unknown')
    const [rate, setRate] = useState('4.8')
    const [price, setPrice] = useState(25)
    // const [index, setIndex] = useState<number>(-1)
    // const [idd, setId] = useState<any>('25')
    // const [quantity, setQuantity] = useState(0)

    useEffect(()=>{
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
        // .then(res=>{
            
                // setId(res.data.items[Number(nr)].id)
                // console.log(res.data.items[Number(nr)].id)
            // setImage(res.data.items[Number(nr)].volumeInfo.imageLinks.thumbnail);
            // setTitle1(res.data.items[Number(nr)].volumeInfo.title)
            // setDate(res.data.items[Number(nr)].volumeInfo.publishedDate)
            // setDescription(res.data.items[Number(nr)].volumeInfo.description)
            // setPagecount(res.data.items[Number(nr)].volumeInfo.pageCount)
            // setRate(res.data.items[Number(nr)].volumeInfo.averageRating)
            // setAuthors(res.data.items[Number(nr)].volumeInfo.authors)
            // setPrice(res.data.items[Number(nr)].saleInfo.retailPrice.amount)
   
        // })
        // .catch(err=>console.log(err))


      //szukaj po id:
     axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
        .then(res=>{
            
          console.log(res.data)
            setImage(res.data.volumeInfo.imageLinks.thumbnail);
            setTitle1(res.data.volumeInfo.title)
            setDate(res.data.volumeInfo.publishedDate)
            setDescription(res.data.volumeInfo.description)
            setPagecount(res.data.volumeInfo.pageCount)
            setRate(res.data.volumeInfo.averageRating)
            setAuthors(res.data.volumeInfo.authors)
            setPrice(res.data.saleInfo.retailPrice.amount ? res.data.saleInfo.retailPrice.amount : 25)
   
        })
        .catch(err=>console.log(err))

    }, [])

    const handleAdd=()=>{
      dispatch(addReservation([id!, image!, title1!, price!, 1]))
    //   const whichArray = reservations.find((el:any)=>{return el[0]===id})
    //  setIndex(reservations.indexOf(whichArray))
    }
    
    const handleQuantity = (e:number)=>{
      
      const whichArray = reservations.find((el:any)=>{return el[0]===id})
      const indx = reservations.indexOf(whichArray)

    dispatch(changeQuantity([e, indx]))
    }

  return (
    <div  className='component'>    

    <div id="contener">
    <img src={image ? image : require('../images/image.svg').default} className='image' ></img>
   
   <div id="info" >

      
     <span id='title' className='text-4xl mx-auto pb-3'>{title1}</span>
     <span id='price'><span className='thin'>price: </span>{price}$</span>
     
     

    {reservations.some((el:any)=>{ return el[0]===id}) ? 
     <>
     <div id="buttons" className='mt-5'>
     <button id='plus' onClick={e=>handleQuantity(1)}>+</button>
     <span id='quantity'>
      {reservations[
        reservations.indexOf(reservations.find((el:any)=>{return el[0]===id}))
        ][4]}
      </span>
      {reservations[
        reservations.indexOf(reservations.find((el:any)=>{return el[0]===id}))
        ][4] >=2 ?
        <button id='minus' onClick={e=>handleQuantity(-1)}>-</button>
        :
        <button id='minusDisabled'>-</button>
      }
     
     </div>
 
     {/* <input type="number" value='5' /> */}
     <span id='total' className='mb-5'><span className='thin'>in total: </span> x $</span>
     </> :
     <button id='add' className='border-current border-2 rounded text-2xl my-5 mx-auto' onClick={e=>handleAdd()}>add to cart</button> 
   }

    {authors.length===1 ? 

    <span><span className='thin'>author: </span>
    {authors[0]}
    </span>
  :
    <span><span className='thin'>authors: </span>
      {authors.map((a)=>{return <p key={a}>&nbsp; &nbsp; - {a}</p>})}
      </span>

      }
 {/* <span><span className='thin'>author(s): </span>
      {authors.map((a)=>{return <p key={Math.random()}>&nbsp; &nbsp; - {a}</p>})}
      </span> */}


    <span><span className='thin'>pages: </span> {pagecount}</span>
    <span><span className='thin'>date of release: </span> {date}</span>
    <span><span className='thin'>rate: </span> {rate ? rate : '4.2'}/5</span>

    <Link to={`/books/_author:${authors}@`} id='moreFrom' className='text-2xl mx-auto'>see more from this author</Link>
    </div>
    </div>

     <div id='description' className='px-10 pb-5' dangerouslySetInnerHTML={{__html: description}} />
    


    </div>
  )
}
