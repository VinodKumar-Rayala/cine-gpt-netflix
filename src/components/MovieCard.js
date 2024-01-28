import React from 'react'
import { IMG_URL } from './constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='md:w-48 w-32  pr-4 hover:opacity-25'>
        <img alt="movieCard" src={IMG_URL+posterPath} className='rounded-lg '/>
    </div>
  )
}

export default MovieCard