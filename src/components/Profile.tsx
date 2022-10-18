import React, {useEffect} from 'react'

export default function Profile() {
  useEffect(()=>  {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className='component'>Profile</div>
  )
}
