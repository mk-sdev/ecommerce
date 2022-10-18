import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart}  from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart}  from '@fortawesome/free-regular-svg-icons'
import { useParams, Link  } from 'react-router-dom'
import axios from 'axios'
import '../styles/book.css'

import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import { addBook, changeQuantity, setQuantity } from '../redux/cart'
import {addFav, delFav } from '../redux/fav'

export default function Book() {

  const books = useSelector((state:RootState)=>state.books.value)
  const favbooks = useSelector((state:RootState)=>state.favbooks.value)
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
    useEffect(()=>  {
      window.scrollTo(0, 0);
    },[]);
    
    useEffect(()=>{
      console.log(books.map((a:any, i:any)=>{return (a[0]===id ? a[4] : null)}))
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&


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
      dispatch(addBook([id!, image!, title1!, price!, 1]))
    //   const whichArray = books.find((el:any)=>{return el[0]===id})
    //  setIndex(books.indexOf(whichArray))
    }
    
    const handleQuantity = (e:number)=>{
      
      const whichArray = books.find((el:any)=>{return el[0]===id})
      const indx = books.indexOf(whichArray)

    dispatch(changeQuantity([e, indx]))
    }

    const handleQuantity2 = (e:number)=>{
      const whichArray = books.find((el:any)=>{return el[0]===id})
      const indx = books.indexOf(whichArray)

      if(e>1)
    dispatch(setQuantity([e, indx]))
    else
    dispatch(setQuantity([1, indx]))
    }

  return (
    <div  className='component'>    

    <div id="contener">
    <img src={image ? image : require('../images/image.svg').default} className='image' ></img>
   
   <div id="info" >

      
     <span id='title' className='text-4xl mx-auto pb-3'>

   {favbooks.some((el:any)=>{ return el[0]===id}) ?
    <><FontAwesomeIcon icon={faHeart} className='text-4xl text-red-500        hover:cursor-pointer hover:text-red-300 transition' title='remove from favourite' />
     &nbsp;</>
    :
    <>
       <><FontAwesomeIcon icon={farHeart} className='text-4xl text-red-400 hover:cursor-pointer hover:text-red-600 transition' title='add to favourite' />
      &nbsp;</>
    </>

    }
      {title1}</span>
     <span id='price'><span className='thin'>price: </span>{price}$</span>
     
     

    {books.some((el:any)=>{ return el[0]===id}) ? 
     <>
     <div className="buttons mt-5" >
     <button className='plus' onClick={e=>handleQuantity(1)}>+</button>
     <span className='quantity'>
      {books[
        books.indexOf(books.find((el:any)=>{return el[0]===id}))
        ][4]}
      </span>
      {books[
        books.indexOf(books.find((el:any)=>{return el[0]===id}))
        ][4] >=2 ?
        <button className='minus' onClick={e=>handleQuantity(-1)}>-</button>
        :
        <button className='minusDisabled'></button>
      }
     
     </div>
 
     <input type="number" 
     value={books[books.findIndex((el:any) => el[0] === id)][4]}
     onChange={e=>handleQuantity2(+e.target.value)} />

     <span id='total' className='mb-5'><span className='thin'>in total: </span> {books.map((a:any, i:any)=>{return a[0]===id &&  (a[3]*a[4]).toFixed(2)})} $</span>
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
