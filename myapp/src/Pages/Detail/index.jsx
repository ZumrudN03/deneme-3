import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../Context/wishlist'
import { BasketContext } from '../../Context/basket'
import { useParams } from 'react-router-dom'

function Detail() {
  const {id} =useParams()
  const [detail, setdetail] = useState([])
    const {addWishlits} = useContext(WishlistContext)
    const {addbasket} = useContext(BasketContext)


    function getFetch() {
        fetch("http://localhost:3100/"+id)
        .then((res)=>res.json())
        .then((data)=>setdetail(data))
    }
    useEffect(() => {
     getFetch()
    }, [])
  return (
    <>
    <Helmet>
        <title>
            Home
        </title>
    </Helmet>
    <div className="detail">
    <div className='detail'>
                <div className='detail_text'><p>{detail.title}</p>
                <p>${detail.price}</p></div>
                <div className="detail_icon">
                    <p onClick={()=>addWishlits(detail)}>W</p>
                    <p onClick={()=>addbasket(detail)}>B</p>
                    <p>D</p>
                </div>
            </div>
    </div>
    </>
  )
}

export default Detail