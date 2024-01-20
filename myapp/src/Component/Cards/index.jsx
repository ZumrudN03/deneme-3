import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import { WishlistContext } from '../../Context/wishlist'
import { BasketContext } from '../../Context/basket'
import { Link } from 'react-router-dom'

function Cards() {
    const [card, setCard] = useState([])
    const {addWishlits} = useContext(WishlistContext)
    const {addbasket} = useContext(BasketContext)


    function getFetch() {
        fetch("http://localhost:3100/")
        .then((res)=>res.json())
        .then((data)=>setCard(data))
    }
    useEffect(() => {
     getFetch()
    }, [])
    
  return (
    <div className='cards'>
        {card.map((x)=>(
            <div className='card'>
                <div className='card_text'><p>{x.title}</p>
                <p>${x.price}</p></div>
                <div className="card_icon">
                    <p onClick={()=>addWishlits(x)}>W</p>
                    <p onClick={()=>addbasket(x)}>B</p>
                    <p><Link to={"/detail/"+x._id}>D</Link></p>
                </div>
            </div>
        ))}

    </div>
  )
}

export default Cards