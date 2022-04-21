import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <h2> <Link to='/'>Home</Link> </h2>

        <h2><Link to='/movies'>Movies</Link></h2>
    </div>
  )
}

export default Navbar