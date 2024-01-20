import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/addpage"}>Add Page</Link></li>
        <li><Link to={"/basket"}>Basket</Link></li>
        <li><Link to={"/wishlist"}>Wishlist</Link></li>
      </ul>
        
    </div>
  )
}

export default Navbar