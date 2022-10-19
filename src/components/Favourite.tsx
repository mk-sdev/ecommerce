import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/books.css'
import {useSelector} from 'react-redux'
import {RootState} from '../redux/store'

export default function Books() {

    const favbooks= useSelector((state:RootState)=>state.favbooks.value)

  useEffect(()=>  {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className='component books' style={{paddingTop: '0'}} >

       { favbooks.length===0 && 
       <>
        <div className='w-full text-center bg-red-500 py-2 px-1 mb-10 font-normal' 
          style={{background: 'hsl(37, 95%, 71%)', fontFamily: 'Oswald', color: 'var(--dark)'}}
          >You don't have favourite books.</div>
        <img src={require('../images/nothing.svg').default} alt="" className='w-full m-auto' style={{maxWidth: '300px', marginTop: '10%', translate: '0 -10%'}}  />
       </>}


       { favbooks.length>0 && 
       <>
        <div className='w-full text-center bg-red-500 py-2 px-1 mb-10 font-normal' 
          style={{background: 'hsl(37, 95%, 71%)', fontFamily: 'Oswald', color: 'var(--dark)'}}
          >Here are your favourite books.</div>
       
            <div id='homeItems'>

            { favbooks.map((a: any, i: any)=>{
              return (
                <Link to={`/book/${favbooks[i][0]}`} key={i}> <div className='item'>
                
                     <img src={favbooks[i][1]} alt={favbooks[i][2]+' cover'} className='bookImg'/> : 
                     
                    <div className="data">
                      <br />
                      <br />
                      <div className='title'>{favbooks[i][2]}</div>
                      <br />
                      
                    </div>
                </div></Link>
                     )
                }) 
            }
            
            </div>
            
          </>}

    </div>
  )
}
