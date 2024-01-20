import React, { createContext, useState } from 'react'
import useLocalStrg from '../Hook/useLocalStrg'

export const WishlistContext = createContext()

function WishlistProvider({children}) {
    const [wishlist, setwishlist] = useLocalStrg("wihslist",[])

    function addWishlits(item) {
        const index = wishlist.findIndex((x)=>x._id === item._id)
        if (index === -1) {
            setwishlist([...wishlist,item])
        }
        else{
            removerWishlist()
        }
    }

    function removerWishlist(item) {
        setwishlist(wishlist.filter((x)=> x._id !== item._id))
    }
  return (
    <WishlistContext.Provider value={{wishlist,addWishlits,removerWishlist}}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider