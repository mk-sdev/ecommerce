import React, {useState, useEffect} from 'react'
import { Link , useParams, useNavigate} from 'react-router-dom'
import '../styles/books.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping, faN}  from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import { objectTraps } from 'immer/dist/internal'


export default function Books() {
  const navigate=useNavigate()

  //used in inputs and to define the axios link
  const [searchTitle, setSearchTitle] = useState('')
  const [searchAuthor, setSearchAuthor] = useState('')
 
  const [link, setLink] = useState('')
  //used to navigate
  const {title} = useParams()
  const {page} = useParams()
  
  const [data, setData] = useState<any>()
  useEffect(()=>{

    const obj: any = title?.replace('_autor-', ' ').replace('_genre-', ' ').split(" ")
  
    let k: keyof typeof obj;  // Type is "one" | "two" | "three"
    for (k in obj) {
      // const searchtitle = obj[0]
      // const searchAuthor = obj[1]
      // const searchgenre = obj[2]
    }
    console.log('ss', searchTitle.replace(/ /g,'')==='', searchAuthor); 
    if(searchTitle.replace(/ /g,'')!=='' && searchAuthor.replace(/ /g,'')==='')
    setLink(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTitle}&maxResults=12&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)

    else if (searchTitle.replace(/ /g,'')==='' && searchAuthor.replace(/ /g,'')!=='')
    setLink(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchAuthor}&maxResults=12&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)

    else if(searchTitle.replace(/ /g,'')!=='' && searchAuthor.replace(/ /g,'')!=='')
    setLink(`https://www.googleapis.com/books/v1/volumes?q=intitle=${searchTitle}&inauthor:${searchAuthor}&maxResults=12&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)

    console.log(searchTitle, searchAuthor.length, link)

     axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTitle}&maxResults=12&startIndex=${page === undefined ? 0 : 12*+page+1}&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
        .then(res=>{
            
          setData(res.data.items)
    //        console.log('data: ' , data[1].id)
           console.log('data: ' , res.data.items[0])
         
          // res.data.items.map((a: any, i: number)=>console.log(a))


                // setId(res.data.items[Number(nr)].id)
            // setImage(res.data.items[Number(nr)].volumeInfo.imageLinks.thumbnail);
            // setTitle1(res.data.items[Number(0)].volumeInfo.title)
            // setDate(res.data.items[Number(nr)].volumeInfo.publishedDate)
            // setDescription(res.data.items[Number(nr)].volumeInfo.description)
            // setPagecount(res.data.items[Number(nr)].volumeInfo.pageCount)
            // setRate(res.data.items[Number(nr)].volumeInfo.averageRating)
            // setAuthors(res.data.items[Number(nr)].volumeInfo.authors)
            // setPrice(res.data.items[Number(nr)].saleInfo.retailPrice.amount)
   
        })
        .catch(err=>console.log(err))

        console.log(obj)
        // alert('ddd')

  }, [title, page])


     useEffect(()=>{

    //tutaj lista ketogorii: https://bisg.org/page/bisacedition

    // po gatunku:
    //     axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
    //     .then(res=>{ console.log(res.data)})
    //    .catch(err=>console.log(err))


    // po autorze:
      //   axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"Richard+Moreno"&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
      //   .then(res=>{ console.log(res.data)})
      //  .catch(err=>console.log(err))

         //ilość wyszukań oraz od którego indexu zacząć:
      //   axios.get(`https://www.googleapis.com/books/v1/volumes?q=dupa&maxResults=5&startIndex=2&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
      //   .then(res=>{ console.log(res.data)})
      //  .catch(err=>console.log(err))


    }, [])

  //1. obczaić jeszcze czy sa się wyszukać bez tytułu np po samym autorze lub gatunku. jeśli się da to dodać w Book.tsx opcję zobacz więcej od tego autora oraz w topnav wyszukiwanie po gatunku. Jak nie to dać warunek w inputach że musi być tytuł podany.
  //2. Druga kwestia to show more books, trzeba też to jakoś wykminić. Może dodać przycisk następnej strony.
  //3. trzecia rzecz taka, że ten oto komponent można wykorzystać zarówno podczas wyszukiwania lupą , search for more, ale także new, bestsellers i discounts. Jeśli uda sie wykminić wysszukiwanie bez tytułu (patrz punkt 1) to nie trzeba nawet dodawać ręcznie.

  //fucntion fn(){ pobieranie danych za API [wspomóc się repo tego gościa
//https://github.com/Kirti-salunkhe/OpenBook/blob/main/src/Components/Main.js   ] }
function searchBooks(e?: string):void{

  if(e==='Enter') {
    if(searchTitle.replace(' ', '')==='' && searchAuthor.replace(/ /g, '')==='')
    navigate(`/books`); 
    else 
    navigate(`/books/${searchTitle.replace(/ /g,'').toLowerCase()}_autor-${searchAuthor}`)
    } 
  }

  return (
    <div className='component books' >

  <div id='inputs' className='bg-red-300 p-1 flex flex-wrap'
  style={{justifyContent: 'center', alignItems: 'center', gap: '10px'}}>

    <input type="text" placeholder='title' value={searchTitle} 
    onChange={e=>setSearchTitle(e.target.value)} onKeyDown={e=>searchBooks(e.key)} />

    <input type="text" placeholder='autor' value={searchAuthor}
    onChange={e=>setSearchAuthor(e.target.value)} onKeyDown={e=>searchBooks(e.key)}/>

    <div id="genre" className='relative' onMouseEnter={e=>{document.querySelector('#test')!.innerHTML='s'}}>
    <input type="text" placeholder='genre'/>
    <div id="test" className='absolute bg-blue-500 w-full'>cece</div>
    </div>

    <button>search</button>
  {/* //jeszcze po cenie i długosci */}
  </div>

    {title===undefined ? 
  
    <img src={require('../images/search.svg').default} alt="" className='w-full m-auto' style={{maxWidth: '400px', marginTop: '10%', translate: '0 -10%'}}  />

    :

    <div id='homeItems' style={{display: title!==undefined ? 'grid' : 'block'}}>

      {data ? data.map((a: any, i: any)=>{
        return (
          <Link to={`/book/${data[i].id}`} key={i}> <div className='item'>
               {data[i].volumeInfo.imageLinks ? 

               <img src={data[i].volumeInfo.imageLinks.thumbnail} alt={data[i].volumeInfo.title+' cover'} className='bookImg'/> : 

                <img src={require('../images/image.svg').default} alt="book cover" className='bookImg' />}

               <FontAwesomeIcon title='add' className='basket' icon={faBasketShopping} />
              <div className="data">
                <br />
                <br />
                <br />
                <div className='title'>{data[i].volumeInfo.title}</div>
                <div className='price'>{data[i].saleInfo.retailPrice ? data[i].saleInfo.retailPrice.amount+'$' : '25$'}</div>
              </div>
          </div></Link>
        )
      }) : 'oops... an error occured'}


          {title && 
            <div id="moreBooks" className='breadcrumbs'>

               {page && +page>=1 &&
                 <Link to={`/books/${title}/${page? +page-1 : 1}`} id='moreBooks'>
                  previous page
                  </Link>
                }

                  <Link to={`/books/${title}/${page? +page+1 : 1}`} id='moreBooks'>
                  next page
                  </Link>
            
            </div>}
      </div>
    }

    </div>
  )
}
