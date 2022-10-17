import React, {useState, useEffect} from 'react'
import { Link , useParams, useNavigate} from 'react-router-dom'
import '../styles/books.css'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import { objectTraps } from 'immer/dist/internal'

export default function Books() {  
  const {title} = useParams()
  const {page} = useParams()

  const [data, setData] = useState<any>()

  return (
    <div className='component books' style={{paddingTop: '0'}} >


    {title===undefined ? 

      <>

    <img src={require('../images/search.svg').default} alt="" className='w-full m-auto' style={{maxWidth: '300px', marginTop: '10%', translate: '0 -10%'}}  />
      </>

    :

    <div id='homeItems' style={{display: title!==undefined ? 'grid' : 'block'}}>

      {data ? data.map((a: any, i: any)=>{
        return (
          <Link to={`/book/${data[i].id}`} key={i}> <div className='item'>
               {data[i].volumeInfo.imageLinks ? 

               <img src={data[i].volumeInfo.imageLinks.thumbnail} alt={data[i].volumeInfo.title+' cover'} className='bookImg'/> : 

                <img src={require('../images/image.svg').default} alt="book cover" className='bookImg' />}

              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>{data[i].volumeInfo.title}</div>
                <div className='price'>{data[i].saleInfo.retailPrice ? data[i].saleInfo.retailPrice.amount+'$' : '25$'}</div>
              </div>
          </div></Link>
        )
      }) 
      :  
      <div>{data}</div>}

      </div>
    }

    </div>
  )
}

