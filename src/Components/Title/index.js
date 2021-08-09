import React from 'react'
import { Link } from 'react-router-dom'
import './Title.css'
function Title() {
  return (
    <div>
      <Link to={'/'}>
        <h1>Gifs!</h1>
      </Link>
    </div>
  )
}

export default Title
