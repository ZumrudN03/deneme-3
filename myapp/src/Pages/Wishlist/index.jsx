import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../Context/wishlist";

function Wishlist() {
  const { wishlist, removerWishlist } = useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="wishlist">
        {wishlist.map((x) => (
          <div className="card">
            <div className="card_text">
              <p>{x.title}</p>
              <p>${x.price}</p>
            </div>
            <div className="card_icon">
              <p onClick={() => removerWishlist(x)}>x</p>
              <p>B</p>
              <p>D</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Wishlist;
