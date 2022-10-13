import React, {useState, useEffect} from 'react'
import { Link , useParams, useNavigate} from 'react-router-dom'
import '../styles/books.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping, faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import { objectTraps } from 'immer/dist/internal'


export default function Books() {
  const navigate=useNavigate()
  
  //used to navigate
  const {title} = useParams()
  const {page} = useParams()

  //used in inputs and to define the axios link
  // const [searchTitle, setSearchTitle] = useState<string | undefined>(title?.replace('_title:', '').substr(0, indexOf(":")))
  const [searchTitle, setSearchTitle] = useState<string | undefined>('')
  const [searchAuthor, setSearchAuthor] = useState<string | undefined>('')
  const [searchGenre, setSearchGenre] = useState<string | undefined>('')
  const [searchKey, setSearchKey] = useState<string | undefined>(undefined)
//gdybym zmienił zdanie to usunąć to co poniżej, zmienić url (! @ $) i usunąć useEffect jedno
  const [isTitle, setIsTitle] = useState<undefined | string>('')
  const [isAuthor, setIsAuthor] = useState<undefined | string>('')
  const [isGenre, setIsGenre] = useState<undefined | string>('')

  const [showGenres, setShowGenres] = useState(false)
  const [data, setData] = useState<any>()



  useEffect(()=>{
    let titlee = searchTitle ?'intitle:'+searchTitle?.replace(/ /g,'+').toLowerCase()+'&' : ''
    
    let author = searchAuthor ? 'inauthor:'+searchAuthor?.replace(/ /g,'+').toLowerCase()+'&' : ''
    
    let genre = searchGenre ? 'subject:'+searchGenre?.replace(/ /g,'+').toLowerCase()+'&' : ''

    let key = searchKey ? searchKey+'&' : ''
     console.log('',searchTitle, searchGenre, searchAuthor)
    console.log(`https://www.googleapis.com/books/v1/volumes?q=${key}${genre}${titlee}${author}maxResults=12&startIndex=${page === undefined ? 0 : 12*+page+1}&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)

    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${key}${genre}${titlee}${author}maxResults=12&startIndex=${page === undefined ? 0 : 12*+page+1}&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
        .then(res=>{ 
          setSearchKey(undefined)
          setData(res.data.items)
        })
        .catch(err=>{console.log(err); 
          setSearchKey(undefined)
        })

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

      //w przypadku searchTitle i searchAuthor jeśli skałdają się z samych spacji, to stają się undefined. Jeśli są undefined to axios je pomija. Jeśli nie, to w miejscu spacji dodawane są plusy i całość jet sprowadzana do małyc liter. W url są uwzględniane tylko jeśli składają się z przynajmniej jednej litery

      searchTitle?.replaceAll(' ', '')==='' && setSearchTitle(undefined) 
      searchAuthor?.replaceAll(' ', '')==='' && setSearchAuthor(undefined) 
      searchGenre?.replaceAll(' ', '')==='' && setSearchGenre(undefined) 

    }, [searchTitle, searchAuthor, searchGenre])

    useEffect(()=>{
      //niepowiązane. sprawdzałem jak w TS działa iteracja po wartośćiach kluczy obiektu 
 const obj: any = title?.replace('_author:', ' ').replace('_subject:', ' ').replace('_title:', ' ').split(" ")

 let k: keyof typeof obj;  // Type is "one" | "two" | "three"
 for (k in obj) {
   // setSearchTitle(obj[1])
   // setSearchAuthor(obj[2])
   // setSearchGenre(obj[3])
 }

 setTimeout(()=>{
//   if(title && title?.indexOf("_title:")>-1){
//   let isTitle = title?.replace('_title:', '').substr(0, title?.indexOf("_")-1)}
  
//   if(title && title?.indexOf("_author:")>-1){
//   let isAuthor = title?.substr(title?.indexOf('_author:')+8, title?.replace('_title:', '').replace('_author:', '').indexOf('_') - ) 
// alert(isAuthor  )}
if(title && title?.indexOf("_title:")>-1){
  setIsTitle(title?.substring(title?.indexOf('_title:')+7, title?.indexOf('!')))

}
if(title && title?.indexOf("_author:")>-1){
  setIsAuthor(title?.substring(title?.indexOf('_author:')+8, title?.indexOf('@')))

}
if(title && title?.indexOf("_subject:")>-1){
  setIsGenre(title?.substring(title?.indexOf('_subject:')+9, title?.indexOf('$')))

}
console.log(isTitle, isAuthor, isGenre)
   axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchKey ? searchKey+'&' : ''}${isTitle ? 'intitle:'+isTitle+'&' : ''}${isAuthor ? 'inauthor:'+isAuthor+'&' : ''}${isGenre ? 'subject:'+isGenre+'&' : ''}maxResults=12&startIndex=${page === undefined ? 0 : 12*+page+1}&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
   .then(res=>{ 
     setSearchKey(undefined)
     setData(res.data.items)

     
   })
   .catch(err=>{console.log(err); 
     setSearchKey(undefined)
   })
 }, 1000)

}, [])
  //1. obczaić jeszcze czy sa się wyszukać bez tytułu np po samym autorze lub gatunku. jeśli się da to dodać w Book.tsx opcję zobacz więcej od tego autora oraz w topnav wyszukiwanie po gatunku. Jak nie to dać warunek w inputach że musi być tytuł podany.
  //2. Druga kwestia to show more books, trzeba też to jakoś wykminić. Może dodać przycisk następnej strony.
  //3. trzecia rzecz taka, że ten oto komponent można wykorzystać zarówno podczas wyszukiwania lupą , search for more, ale także new, bestsellers i discounts. Jeśli uda sie wykminić wysszukiwanie bez tytułu (patrz punkt 1) to nie trzeba nawet dodawać ręcznie.

  //fucntion fn(){ pobieranie danych za API [wspomóc się repo tego gościa
//https://github.com/Kirti-salunkhe/OpenBook/blob/main/src/Components/Main.js   ] }
function searchBooks(e?: string):void{

  if(e==='Enter') {
    if(searchTitle?.replace(/ /g, '')==='' && searchAuthor?.replace(/ /g, '')==='' && searchGenre?.replace(/ /g, '')==='')
    navigate(`/books`); 
    else if(searchTitle!==undefined || searchAuthor!==undefined || searchGenre!==undefined){
      let titlee = searchTitle ?'_title:'+searchTitle?.replace(/ /g,'+').toLowerCase()+'!' : ''
    
    let author = searchAuthor ? '_author:'+searchAuthor?.replace(/ /g,'+').toLowerCase()+'@' : ''
    
    let genre = searchGenre ? '_subject:'+searchGenre?.replace(/ /g,'+').toLowerCase()+'$' : ''

    navigate(`/books/${titlee}${author}${genre}`)}
    } 
  }

  function searchBooksBtn(){
    if(searchTitle?.replace(/ /g, '')==='' && searchAuthor?.replace(/ /g, '')==='' && searchGenre?.replace(/ /g, '')==='')
    navigate(`/books`); 
    else if(searchTitle!==undefined || searchAuthor!==undefined || searchGenre!==undefined){
      let titlee = searchTitle ?'_title:'+searchTitle?.replace(/ /g,'+').toLowerCase()+'!' : ''
    
    let author = searchAuthor ? '_author:'+searchAuthor?.replace(/ /g,'+').toLowerCase()+'@' : ''
    
    let genre = searchGenre ? '_subject:'+searchGenre?.replace(/ /g,'+').toLowerCase()+'$' : ''

    navigate(`/books/${titlee}${author}${genre}`)}
  }
  
  return (
    <div className='component books' style={{paddingTop: '0'}} >

  <div id='inputs' className='p-3 flex flex-wrap'
  style={{justifyContent: 'center', alignItems: 'center', gap: '20px'}}>

    <input id='titleInp' type="text" placeholder='title' value={searchTitle} 
    onChange={e=>setSearchTitle(e.target.value)} onKeyDown={e=>searchBooks(e.key)} />

    <input id='authorInp' type="text" placeholder='author' value={searchAuthor}
    onChange={e=>setSearchAuthor(e.target.value)} onKeyDown={e=>searchBooks(e.key)}/>

    <div id="genre" className='relative z-10' onMouseEnter={e=>{setShowGenres(true)}} onMouseLeave={e=>{setShowGenres(false)}}>

    <input type="text" placeholder='genre'  
    value={searchGenre?.toLowerCase().replaceAll('+', ' ')} 
    onChange={e=>{setSearchGenre(e.target.value)}} onKeyUp={e=>searchBooks(e.key)} className='w-full rounded-sm'/>

    {showGenres && <div id='genreCon' onClick={e=>setShowGenres(false)} className='absolute w-full overflow-y-scroll'>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('antiques+&+collectibles')}}
      >ANTIQUES & COLLECTIBLES</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('architecture')}}>ARCHITECTURE</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('art')}}>ART</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('BIBLES')}}>BIBLES</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('BIOGRAPHY & AUTOBIOGRAPHY')}}>BIOGRAPHY & AUTOBIOGRAPHY</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('BODY, MIND & SPIRIT')}}>BODY, MIND & SPIRIT</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('BUSINESS & ECONOMICS')}}>BUSINESS & ECONOMICS</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('COMICS & GRAPHIC NOVELS')}}>COMICS & GRAPHIC NOVELS</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('COMPUTERS')}}>COMPUTERS</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('COOKING')}}>COOKING</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('CRAFTS & HOBBIES')}}>CRAFTS & HOBBIES</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('DESIGN')}}>DESIGN</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('DRAMA')}}>DRAMA</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('EDUCATION')}}>EDUCATION</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('FAMILY & RELATIONSHIPS')}}>FAMILY & RELATIONSHIPS</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('FICTION')}}>FICTION</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('FOREIGN LANGUAGE STUDY')}}>FOREIGN LANGUAGE STUDY</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('GAMES & ACTIVITIES')}}>GAMES & ACTIVITIES</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('GARDENING')}}>GARDENING </li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('HEALTH & FITNESS')}}>HEALTH & FITNESS</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('HISTORY')}}>HISTORY</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('HOUSE & HOME')}}>HOUSE & HOME</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('HUMOR')}}>HUMOR</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('JUVENILE FICTION')}}>JUVENILE FICTION</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('JUVENILE NONFICTION')}}>JUVENILE NONFICTION</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('LANGUAGE ARTS & DISCIPLINES')}}>LANGUAGE ARTS & DISCIPLINES</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('LAW')}}>LAW</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('literary collections')}}>LITERARY COLLECTIONS</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('LITERARY CRITICISM')}}>LITERARY CRITICISM</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('mathematics')}}>MATHEMATICS</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('medical')}}>MEDICAL</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('music')}}>MUSIC</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('nature')}}>NATURE</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('performing arts')}}>PERFORMING ARTS</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('pets')}}>PETS</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('photography')}}>PHOTOGRAPHY</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('philospohy')}}>PHILOSOPHY </li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('political science')}}>POLITICAL SCIENCE</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('poetry')}}>POETRY</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('reference')}}>REFERENCE</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('psychology')}}>PSYCHOLOGY</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('sceince')}}>SCIENCE</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('religion')}}>RELIGION</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('social science')}}>SOCIAL SCIENCE</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('self-help')}}>SELF-HELP</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('study aids')}}>STUDY AIDS</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('sports & recreation')}}>SPORTS & RECREATION</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('transportation')}}>TRANSPORTATION</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('technology')}}>TECHNOLOGY & ENGINEERING</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('true crime')}}>TRUE CRIME</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('travel')}}>TRAVEL</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('young adult nonfiction')}}>YOUNG ADULT NONFICTION</li>
      <li className='genre w-full pl-2' onClick={e=>{setSearchGenre('young adult fiction')}}>YOUNG ADULT FICTION</li>
    </div>}
    </div>

    <button id='searchBtn' onClick={e=>searchBooksBtn()} >search  <FontAwesomeIcon icon={ faMagnifyingGlass} /> </button>
  {/* //jeszcze po cenie i długosci */}
  </div>

    {title===undefined ? 
  
    <img src={require('../images/search.svg').default} alt="" className='w-full m-auto' style={{maxWidth: '400px', marginTop: '10%', translate: '0 -10%'}}  />

    :

    <div id='homeItems' style={{display: title!==undefined ? 'grid' : 'block'}}>
{isTitle} {isGenre} {isAuthor}
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
      }) :  <div>{data}</div>}


          {title && 
            <div id="moreBooks" className='breadcrumbs'>

               {page && +page>=2 &&
                 <Link to={`/books/${title}/${page? +page-1 : 1}`} id='moreBooks'>
                  previous page
                  </Link>
                }
                {page && +page==1 &&
                 <Link to={`/books/${title}`} id='moreBooks'>
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

