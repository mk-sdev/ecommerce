import React from 'react'
import { useParams } from 'react-router-dom'

export default function Book() {
    const {id} = useParams()

  return (
    <div className='component'>
    <br />
    {id}

    <br />
    zdjęcie, tytuł, opis, cena, rok, autor, 
    przycisk dodania do koszyka, przycisk ilości

    </div>
  )
}
