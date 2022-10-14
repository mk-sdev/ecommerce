import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/book.css'

export default function Book() {
    // const {title} = useParams()
    const {id} = useParams()
    const [image, setImage] = useState('')
    const [title1, setTitle1] = useState('')
    const [authors, setAuthors] = useState(['unknown'])
    const [pagecount, setPagecount] = useState('unknown')
    const [description, setDescription] = useState(`description not available`)
    const [date, setDate] = useState('unknown')
    const [rate, setRate] = useState(4.8)
    const [price, setPrice] = useState(25)
    const [idd, setId] = useState<any>('25')

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
            setPrice(res.data.saleInfo.retailPrice.amount)
   
        })
        .catch(err=>console.log(err))

    }, [])







  return (
    <div id='contener' className='component'>


    <img src={image} className='image' ></img>
   
   <div id="info" className='bg-red-300'>
    {/* <span id='priceBook'>50$</span> */}
    {true ? <button>add to cart</button> :
    <>
    <span id='quantity'>0</span>
    <button>+</button>
    <button>-</button>
    <input type="number" value='5' />
    </>}

oto id: {idd}
<br />
    {title1} 
    price: {price}$
     rok: {date}, autors: {authors}, ilość stron: {pagecount} , ocena: {rate}
     <br />
     opis: 
     <div dangerouslySetInnerHTML={{__html: description}} />
    </div>

    </div>
  )
}
