import React, {useState, useEffect} from 'react'
import { Link , useParams, useNavigate} from 'react-router-dom'
import '../styles/books.css'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import { objectTraps } from 'immer/dist/internal'

export default function Books() {  
  const {title} = useParams()
  const {page} = useParams()

  const [data, setData] = useState<any>()

  useEffect(()=>  {
    window.scrollTo(0, 0);
  },[]);
  

  const bookObj = [{ //harry potter
    id: '8exSvgAACAAJ',
    img: 'http://books.google.com/books/content?id=8exSvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'Harry Potter and The Chamber of Secrets',
    price: '25$',
    bestseller: false
  },
  {//animal liberation
    id: 'crbWwAEACAAJ',
    img: 'http://books.google.com/books/content?id=crbWwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'Animal Liberation',
    price: '25$',
    bestseller: true
  },
  {//superintelligence
    id: '7_H8AwAAQBAJ',
    img: 'http://books.google.com/books/content?id=7_H8AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'Superintelligence',
    price: '25$',
    bestseller: false
  },
  {
    id: 'oeAcYb_Gq8cC',
    img: 'http://books.google.com/books/content?id=oeAcYb_Gq8cC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'Who Is Bill Gates?',
    price: '28.49$',
    bestseller: false
  },
  {
    id: 'xp5CvgAACAAJ',
    img: 'http://books.google.com/books/content?id=xp5CvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'Meditations',
    price: '25$',
    bestseller: false
  },
  {
    id: 'wpfOoQEACAAJ',
    img: 'http://books.google.com/books/content?id=wpfOoQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'World War II',
    price: '25$',
    bestseller: false
  },
  {
    id: 'nc1UAAAAYAAJ',
    img: 'http://books.google.com/books/content?id=nc1UAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "Euclid's elements",
    price: '25$',
    bestseller: false
  },
  {
    id: 'DqLPAAAAMAAJ',
    img: 'http://books.google.com/books/content?id=_NsHAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "The Lord of The Rings",
    price: '25$',
    bestseller: true
  },
  {
    id: 'PIypDwAAQBAJ',
    img: 'http://books.google.com/books/content?id=PIypDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "Rich Dad Poor Dad",
    price: '36.59$',
    bestseller: true
  },
  {
    id: 'Uwn0CAAAQBAJ',
    img: 'http://books.google.com/books/content?id=Uwn0CAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "The old man and the sea",
    price: '52.37$',
    bestseller: false
  },
  {
    id: '0fehDAAAQBAJ',
    img: 'http://books.google.com/books/content?id=0fehDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "The little prince",
    price: '9.33$',
    bestseller: false
  },
  {
    id: '8u9KEAAAQBAJ',
    img: 'http://books.google.com/books/content?id=8u9KEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "The Witcher Volume 6: Witch's Lament",
    price: '25$',
    bestseller: false
  },
]

  return (
    <div className='component books' style={{paddingTop: '0'}} >

      <div className='w-full text-center bg-red-500 py-2 px-1 mb-10 font-normal' 
       style={{background: 'hsl(37, 95%, 71%)', fontFamily: 'Oswald', color: 'var(--dark)'}}
       >New Books</div>





    {false ? 

      <>

    {/* <img src={require('../images/search.svg').default} alt="" className='w-full m-auto' style={{maxWidth: '300px', marginTop: '10%', translate: '0 -10%'}}  /> */}

      <img src={require('../images/notfound.svg').default} alt="" className='cartImage absolute inset-2/4  ' style={{maxWidth: '300px'}} ></img>
      </>

    :

    <div id='homeItems' >

      {bookObj ?       bookObj.map((a: any, i: any)=>{
        return (
          <Link key={i} to={`/book/${bookObj[i].id}`}><div className="item">
          <img src={bookObj[i].img} alt="" className='bookImg'/>
          {bookObj[i].bestseller ? <div className='bestseller'>bestseller</div> : null}
                  <div className="data">
                    <br />
                    <br />
                    <br />
                    <div className='title'>{bookObj[i].title}</div>
                    <div className='price'>{bookObj[i].price}</div>
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