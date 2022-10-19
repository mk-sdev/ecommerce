import React, {useState, useEffect} from 'react'
import { Link , useParams, useLocation} from 'react-router-dom'
import '../styles/books.css'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import { objectTraps } from 'immer/dist/internal'

export default function Books() {  
  const location = useLocation()


  const [bookObj, setBookObj] = useState<any>([])

  useEffect(()=>  {
    window.scrollTo(0, 0);
    if(location.pathname === '/new')
    setBookObj(newObj)
    else if(location.pathname === '/bestsellers')
    setBookObj(bestObj)
  },[location.pathname]);

  const bestObj = [{
    id: 'fFCjDQAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=fFCjDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73hZH32fNoFQajsKSMBpMek4nIIXqH_Ozrwfg3-9WWxU8-HRaRJBQSu7V959AxI6XOm10XdvBnbiKZRmB_mhiF_YCVZSt8EmmD6AP7HN-5byyHFj5JPvfC0l_kNG4Q4fMEjvr3t&source=gbs_api',
    title: 'Atomic Habits',
    price: '52.99$',
  },
  {//animal liberation
    id: 'crbWwAEACAAJ',
    img: 'http://books.google.com/books/content?id=crbWwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'Animal Liberation',
    price: '25$',
  },
  {
    id: 'nc1UAAAAYAAJ',
    img: 'http://books.google.com/books/content?id=nc1UAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "Euclid's elements",
    price: '25$',
  },
  {
    id: 'DqLPAAAAMAAJ',
    img: 'http://books.google.com/books/content?id=_NsHAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "The Lord of The Rings",
    price: '25$',
  },
  {
    id: 'x3tgDwAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=x3tgDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE716jOWAwcAJGFsFIsT_ki-cfA_4nVtBVubYLvcQ0bMBPZzXJLC8vVCMPfzIIyA2Fv5Tz_YGibANR4j7nm23QqivsoQQilqW0YS5X4CM7hlKUYF5J6AKa2xFIVn0g1vAYKzO1bEn&source=gbs_api',
    title: "Normal People",
    price: '33.37$',
  },
  {
    id: 'ZuKTvERuPG8C',
    img: 'http://books.google.com/books/content?id=ZuKTvERuPG8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70Xni8-3p6oK_s83lOnk5-hI979ciFTd_27gOQ5gfvmmHJiR8QgzcjsxrPCWaVqKm0SCj_Mcwi4veVrzmtRWjXz5Z644KMBFcq8ELPn3ZOcsADUaaZKFwicP3RrylNr1FSWq7us&source=gbs_api',
    title: "Thinking, Fast and Slow",
    price: '49.88$',
  },
  {
    id: 'u8w_DwAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=u8w_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73tJfs4uplpsNoMLZiUXgCVp5_feJSwiC4v69TgI-HdYiyws7E-_6i4OOp59RJy28bzdddn0JeX8d71zyg6SDUMb64aNx9BzdDiCVL5Zj7ShhGTy7ZAYm9TJRY-gl5jnHAM4_tW&source=gbs_api',
    title: "12 Rules for Life",
    price: '37.99$',
  },
  {
    id: 'TsdEzDtSdl4C',
    img: 'http://books.google.com/books/content?id=TsdEzDtSdl4C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE7178qY5LVcCWogq4HkIKwIs_95m_IZv1Cu2Ow5jxebDCwPMQHXpcwyj7cKGHtWVfywwvHZhfM_3nFlkFP2EszdEUH5n5d300sotW0I-C0gzGbiwIw3S9Sdv0bj43GhbmuOiCSOo&source=gbs_api',
    title: "The Next 100 Years",
    price: '25$',
  },
]








  const newObj = [{ 
    id: 'otD1zQEACAAJ',
    img: 'http://books.google.com/books/content?id=otD1zQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72U3EZmWYHoFP004hV7X-qKNNbTOh8jAGxjceHwLkf_ExKyckmw0GGPmxhuB88yp0tn1nrBe0rbQI2ZBdJCav3tUBo6DAl7Rg8df4BcADL2olKPad_Mvfn7BMWBOAbVdXYGwi6S&source=gbs_api',
    title: 'The Candy House',
    price: '25$',
  },
  {//animal liberation
    id: 'IwgpEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=IwgpEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72-8_UavupCB_qHX-FPstyXhCqU7AKEnlqhJk_Ea6W1oPAiQRWsyelHZYlAgSbHyysVHnAiMZcxLPbwe6moWlNdjTW8-TYPMv1-y8fPayBNdEbF0bIby2c0KoQP6rQCX-Upoe4R&source=gbs_api',
    title: 'To Paradise',
    price: '58.39$',
  },
  {//superintelligence
    id: '91EgEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=91EgEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72H5pEoLrQ2eRs7fwpqhXkWm032uj2MhEOGCXmXoL9nuAtmjbISWAiY-ZxL-tDFPwTKQ-34onhmWdbc077-5I4TODmvg8jjF6iXfsPnWziz7GeTFU9wt5uJ_92pEGh00OIJEqBt&source=gbs_api',
    title: 'Fiona and Jane',
    price: '58.58$',
  },
  {
    id: 'fj84EAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=fj84EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71mdR4P3Om80MeNZs2WRqO0GwwnbQHcC0ebP3G3KMgCr2-kzf3XJuEZ-kDdfgvxKFX4byyFYNpdhoZBSMW1V8ET0LpghTw1kYG3G73yuwBxwvLEqm7WdQb-3f8S_7kDRk2FPf9y&source=gbs_api',
    title: 'Sea of Tranquility',
    price: '58.6$',
  },
  {
    id: 'uS85EAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=uS85EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71g6BD-jCgxTlmOcSTKr02d5KExrbjMuqmLkX8SjyMNJxhTHH0BL1sRu1vo8Nlxi5ZQLRz3kZcza8Pz2pWv6k4-Xo_9MCL_C7jeGXzVC3ewKqQo8vZ3Kh3ctJDXdybYy5azVCBJ&source=gbs_api',
    title: 'Young Mungo',
    price: '49.15$',
  },
  {
    id: 'KZFbEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=KZFbEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73h0FlvLwqAIu5lm587r-nPfke15K5VBwwUmqv-Vpr29bq0v3jOwU-eDiUmL6-7KM3cyTfIZM5QBhZIYoDinAoPCCo9q58bU1sD0S4_0scmMzVAEMn4b5YsKi1esoRgf1_WOAxw&source=gbs_api',
    title: 'Less is Lost',
    price: '69.99$',
  },
  {
    id: 'wVJTEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=wVJTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72kdAB_bTpZdUEDwhNQa48v18nirKszMsnr5_sdW4KiCUwZv-TORN70L9FfleCle1u_qaihjLYjSDa_hycwhAawoKvmqDPoJTZnX98yc00U5rnH6PScpy2N8eup8TRHsB7NbwzF&source=gbs_api',
    title: "The Furrows",
    price: '68.38$',
  },
  {
    id: 'eMOMzgEACAAJ',
    img: 'http://books.google.com/books/content?id=eMOMzgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73xYZma0hJkwHmo9T8RFGmeU20GLu3ypy6qhV14-dMhsGBnm5mIuTV79XE3QsiJfqeFvIXiiWQGh0UieCIkM29eG5VyZs7RTtVTcZFF4aKFq0gRUmemJuE5ZPUV5Z_-pg-Cq1Pd&source=gbs_api',
    title: "Time is a Mother",
    price: '25$',
  },
  {
    id: '8ABdEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=8ABdEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71rmQgJ23Grg7bAtYOHob7mGsXpfmVOmbqWkb95er_nzBYBaikmzfS43vK9rPWNBuQOr37P7dl3sCcxTyGPV0NTT6O_xKx-HNHV_heprAb6q2LFnfWIRF0xapty-EpskZ47jpSE&source=gbs_api',
    title: "Bliss Montage",
    price: '66.75$',
  },
  {
    id: '7McsEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=7McsEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE713BlETYu6Jldese2w9FHNyzLRnsy_5TU62njYZg60ltgTE87R1SOexJpRVao8eWn8JHHolx4GesGfWH6aSEBCPQegWlqjUC97CYNS6aCn3ygAiuhsTFrhaqz7CFKon9l3ZQNn7&source=gbs_api',
    title: "Black Cake",
    price: '49.99$',
  },
  {
    id: 'CH1EEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=CH1EEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72MUV3EA3bLOGrtj9nx0AuQEMOod9WEYTfbmu5hIeAgzjV7NAObogUHh33I0LL6aNvVzucb9ZG5hxeIOV19SRpooDeYc_HRiolAQDm8zafIw96hNJEnocPY4qU1PvhO6YVme9c6&source=gbs_api',
    title: "This Time Tomorrow",
    price: '73.25$',
  },
  {
    id: 'YQVTEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=YQVTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73AkFhBdSvdCEXPQfvkgkKy9vl8UWc6ZK1zA3LnPW2XFyiKfNVsE0ez4Km-Qy9LFLIst4__y1i-aD6GukshsblGx-PeI8LqQ5pCP_JyjVPmWuJ-dYzFNEPOWTip5OZeiKV67QJo&source=gbs_api',
    title: "All This Could Be Different",
    price: '54.99$',
  },
]

  return (
    <div className='component books' style={{paddingTop: '0'}} >

      <div className='w-full text-center bg-red-500 py-2 px-1 mb-10 font-normal' 
       style={{background: 'hsl(37, 95%, 71%)', fontFamily: 'Oswald', color: 'var(--dark)'}}>
        {location.pathname==='/new' && "New Books"}
        {location.pathname==='/bestsellers' && "Bestsellers"}
        </div>






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
          {location.pathname==='/new' ? <div className='new'>new</div> : <div className='bestseller'>bestseller</div>}
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
      <div>ee</div>}

      </div>
    }





    </div>
  )
}