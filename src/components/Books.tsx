import React, {useState, useEffect} from 'react'
import { Link , useParams, useNavigate} from 'react-router-dom'
import '../styles/books.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import { objectTraps } from 'immer/dist/internal'


export default function Books() {
  const navigate=useNavigate()
  
  //used to navigate
  const {title} = useParams()
  const {page} = useParams()

  const [searchTitle, setSearchTitle] = useState<string | undefined>((title && title?.indexOf("_title:")>-1) ? title?.substring(title?.indexOf('_title:')+7, title?.indexOf('!')) : '')

  const [searchAuthor, setSearchAuthor] = useState<string | undefined>((title && title?.indexOf("_author:")>-1) ? title?.substring(title?.indexOf('_author:')+8, title?.indexOf('@')) : '')

  const [searchGenre, setSearchGenre] = useState<string | undefined>((title && title?.indexOf("_subject:")>-1) ? title?.substring(title?.indexOf('_subject:')+9, title?.indexOf('$')): '')

  const [showGenres, setShowGenres] = useState(false)
  const [data, setData] = useState<any>()


  useEffect(()=>{
    let titlee = searchTitle ?'intitle:'+searchTitle?.replace(/ /g,'+').toLowerCase()+'&' : ''
    
    let author = searchAuthor ? 'inauthor:'+searchAuthor?.replace(/ /g,'+').toLowerCase()+'&' : ''
    
    let genre = searchGenre ? 'subject:'+searchGenre?.replace(/ /g,'+').toLowerCase()+'&' : ''

    let key = (title && title?.indexOf("_title:")===-1 && title?.indexOf("_author:")===-1 && title?.indexOf("_subject:")===-1) ? title+'&' : ''
    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${key}${genre}${titlee}${author}maxResults=12&startIndex=${page === undefined ? 0 : 12*+page+1}&key=AIzaSyDrK5Q5wFwSWpS7MLeCjyC8vCrR1g_wD3o`)
        .then(res=>{ 
          // setSearchKey(undefined)
          setData(res.data.items)
        })
        .catch(err=>{console.log(err); 
          // setSearchKey(undefined)
        })

  }, [title, page])


     useEffect(()=>{
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
}, [])

function searchBooks(e?: string):void{
  if(e==='Enter') {
      setShowGenres(false)
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

  function searchFn(){
  
    let li = document.querySelectorAll("li");

    for (let i = 0; i < li.length; i++) {
      if (li[i].id.indexOf(searchGenre!.toLowerCase()) > -1) {
        li[i].setAttribute("style", "display: block");
      } else {
        li[i].setAttribute("style", "display: none");
      }
    }
  }

  return (
    <div className='component books' style={{paddingTop: '0'}} >

  <div id='inputs' className='p-3 flex flex-wrap'
  style={{justifyContent: 'center', alignItems: 'center', gap: '20px'}}>

    <input className='text-center' id='titleInp' type="text" placeholder='title' value={searchTitle} 
    onChange={e=>setSearchTitle(e.target.value)}  />

    <input className='text-center' id='authorInp' type="text" placeholder='author' value={searchAuthor}
    onChange={e=>setSearchAuthor(e.target.value)}/>

    <div id="genre" className='relative z-10' onMouseEnter={e=>{setShowGenres(true)}} onMouseLeave={e=>{setShowGenres(false)}} >

    <input className='text-center w-full rounded-sm' type="text" placeholder='subject'  
    value={searchGenre?.toLowerCase().replaceAll('+', ' ')} 
    onChange={e=>{setSearchGenre(e.target.value); setShowGenres(true); searchFn()}} 
    onKeyUp={e=>{searchBooks(e.key); searchFn()}}  />

    {showGenres && <div id='genreCon' onClick={e=>setShowGenres(false)} className='absolute w-full overflow-y-auto'>
      <li className='genre w-full pl-2' id='antiques & collectibles' onClick={e=>{setSearchGenre('antiques+&+collectibles')}}
      >ANTIQUES & COLLECTIBLES</li>
      <li className='genre w-full pl-2' id='architecture' onClick={e=>{setSearchGenre('architecture')}}>ARCHITECTURE</li>
      <li className='genre w-full pl-2' id='art' onClick={e=>{setSearchGenre('art')}}>ART</li>
      <li className='genre w-full pl-2' id='bibles' onClick={e=>{setSearchGenre('BIBLES')}}>BIBLES</li>
      <li className='genre w-full pl-2' id='biography & autobiography' onClick={e=>{setSearchGenre('BIOGRAPHY & AUTOBIOGRAPHY')}}>BIOGRAPHY & AUTOBIOGRAPHY</li>
      <li className='genre w-full pl-2' id='body, mind & spirit' onClick={e=>{setSearchGenre('BODY, MIND & SPIRIT')}}>BODY, MIND & SPIRIT</li>
      <li className='genre w-full pl-2' id='business & economics' onClick={e=>{setSearchGenre('BUSINESS & ECONOMICS')}}>BUSINESS & ECONOMICS</li>
      <li className='genre w-full pl-2' id='comiscs & graphic novels' onClick={e=>{setSearchGenre('COMICS & GRAPHIC NOVELS')}}>COMICS & GRAPHIC NOVELS</li>
      <li className='genre w-full pl-2' id='computers' onClick={e=>{setSearchGenre('COMPUTERS')}}>COMPUTERS</li>
      <li className='genre w-full pl-2' id='cooking' onClick={e=>{setSearchGenre('COOKING')}}>COOKING</li>
      <li className='genre w-full pl-2' id='crafts & hobbbies' onClick={e=>{setSearchGenre('CRAFTS & HOBBIES')}}>CRAFTS & HOBBIES</li>
      <li className='genre w-full pl-2' id='design' onClick={e=>{setSearchGenre('DESIGN')}}>DESIGN</li>
      <li className='genre w-full pl-2' id='drama' onClick={e=>{setSearchGenre('DRAMA')}}>DRAMA</li>
      <li className='genre w-full pl-2' id='education' onClick={e=>{setSearchGenre('EDUCATION')}}>EDUCATION</li>
      <li className='genre w-full pl-2' id='family & relationships' onClick={e=>{setSearchGenre('FAMILY & RELATIONSHIPS')}}>FAMILY & RELATIONSHIPS</li>
      <li className='genre w-full pl-2' id='fiction' onClick={e=>{setSearchGenre('FICTION')}}>FICTION</li>
      {/* <li className='genre w-full pl-2' id='foreign language study' onClick={e=>{setSearchGenre('FOREIGN LANGUAGE STUDY')}}>FOREIGN LANGUAGE STUDY</li> */}
      <li className='genre w-full pl-2' id='games & activities' onClick={e=>{setSearchGenre('GAMES & ACTIVITIES')}}>GAMES & ACTIVITIES</li>
      <li className='genre w-full pl-2' id='gardening' onClick={e=>{setSearchGenre('GARDENING')}}>GARDENING </li>
      <li className='genre w-full pl-2' id='health & fitness' onClick={e=>{setSearchGenre('HEALTH & FITNESS')}}>HEALTH & FITNESS</li>
      <li className='genre w-full pl-2' id='history' onClick={e=>{setSearchGenre('HISTORY')}}>HISTORY</li>
      <li className='genre w-full pl-2' id='house & home' onClick={e=>{setSearchGenre('HOUSE & HOME')}}>HOUSE & HOME</li>
      <li className='genre w-full pl-2' id='humor' onClick={e=>{setSearchGenre('HUMOR')}}>HUMOR</li>
      <li className='genre w-full pl-2' id='juvenile fiction' onClick={e=>{setSearchGenre('JUVENILE FICTION')}}>JUVENILE FICTION</li>
      <li className='genre w-full pl-2' id='juvenile nonfiction' onClick={e=>{setSearchGenre('JUVENILE NONFICTION')}}>JUVENILE NONFICTION</li>
      <li className='genre w-full pl-2' id='language arts & disciplines' onClick={e=>{setSearchGenre('LANGUAGE ARTS & DISCIPLINES')}}>LANGUAGE ARTS & DISCIPLINES</li>
      <li className='genre w-full pl-2' id='law' onClick={e=>{setSearchGenre('LAW')}}>LAW</li>
      <li className='genre w-full pl-2' id='literary collections' onClick={e=>{setSearchGenre('literary collections')}}>LITERARY COLLECTIONS</li>
      <li className='genre w-full pl-2' id='literary criticism' onClick={e=>{setSearchGenre('LITERARY CRITICISM')}}>LITERARY CRITICISM</li>
      <li className='genre w-full pl-2' id='mathematics' onClick={e=>{setSearchGenre('mathematics')}}>MATHEMATICS</li>
      <li className='genre w-full pl-2' id='medical' onClick={e=>{setSearchGenre('medical')}}>MEDICAL</li>
      <li className='genre w-full pl-2' id='music' onClick={e=>{setSearchGenre('music')}}>MUSIC</li>
      <li className='genre w-full pl-2' id='nature' onClick={e=>{setSearchGenre('nature')}}>NATURE</li>
      <li className='genre w-full pl-2' id='performing arts' onClick={e=>{setSearchGenre('performing arts')}}>PERFORMING ARTS</li>
      <li className='genre w-full pl-2' id='pets' onClick={e=>{setSearchGenre('pets')}}>PETS</li>
      <li className='genre w-full pl-2' id='philosophy' onClick={e=>{setSearchGenre('philospohy')}}>PHILOSOPHY </li>
      <li className='genre w-full pl-2' id='photography' onClick={e=>{setSearchGenre('photography')}}>PHOTOGRAPHY</li>
      <li className='genre w-full pl-2' id='poetry' onClick={e=>{setSearchGenre('poetry')}}>POETRY</li>
      <li className='genre w-full pl-2' id='political science' onClick={e=>{setSearchGenre('political science')}}>POLITICAL SCIENCE</li>
      <li className='genre w-full pl-2' id='psychology' onClick={e=>{setSearchGenre('psychology')}}>PSYCHOLOGY</li>
      <li className='genre w-full pl-2' id='reference' onClick={e=>{setSearchGenre('reference')}}>REFERENCE</li>
      <li className='genre w-full pl-2' id='religion' onClick={e=>{setSearchGenre('religion')}}>RELIGION</li>
      <li className='genre w-full pl-2' id='science' onClick={e=>{setSearchGenre('sceince')}}>SCIENCE</li>
      <li className='genre w-full pl-2' id='self-help' onClick={e=>{setSearchGenre('self-help')}}>SELF-HELP</li>
      <li className='genre w-full pl-2' id='social science' onClick={e=>{setSearchGenre('social science')}}>SOCIAL SCIENCE</li>
      <li className='genre w-full pl-2' id='sports & recreation' onClick={e=>{setSearchGenre('sports & recreation')}}>SPORTS & RECREATION</li>
      <li className='genre w-full pl-2' id='study aids' onClick={e=>{setSearchGenre('study aids')}}>STUDY AIDS</li>
      <li className='genre w-full pl-2' id='technology' onClick={e=>{setSearchGenre('technology')}}>TECHNOLOGY & ENGINEERING</li>
      <li className='genre w-full pl-2' id='transportation' onClick={e=>{setSearchGenre('transportation')}}>TRANSPORTATION</li>
      <li className='genre w-full pl-2' id='travel' onClick={e=>{setSearchGenre('travel')}}>TRAVEL</li>
      <li className='genre w-full pl-2' id='true crime' onClick={e=>{setSearchGenre('true crime')}}>TRUE CRIME</li>
      <li className='genre w-full pl-2' id='young adult fiction' onClick={e=>{setSearchGenre('young adult fiction')}}>YOUNG ADULT FICTION</li>
      <li className='genre w-full pl-2' id='young adult nonfiction' onClick={e=>{setSearchGenre('young adult nonfiction')}}>YOUNG ADULT NONFICTION</li>
    </div>}
    </div>

    <button id='searchBtn' onClick={e=>searchBooksBtn()} >search  <FontAwesomeIcon icon={ faMagnifyingGlass} /> </button>
  {/* //jeszcze po cenie i długosci */}
  </div>

    {title===undefined ? 

      <>
    <div className='w-full text-center bg-red-500 py-2 px-1 mb-10 font-normal' 
      style={{background: 'hsl(37, 95%, 71%)', fontFamily: 'Oswald', color: 'var(--dark)'}}
      >Type what you are looking for in the inputs above and click the search button</div>
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

