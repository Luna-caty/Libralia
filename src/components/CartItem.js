import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../Context/StoreContext'
function CartItem({ id, name, BookCover, price, discount, discountPrice }) {


    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
    let newPriceAfterDisc = price - (price * discountPrice)

    return (
        <div style={{ display: "flex", padding:" 0 0 20px 10px"}} >
            <div className='cartBookCover' style={{width:"100px",height:"100px",paddingTop:"20px"}}>
                <img src={BookCover} />
            </div>
            <div style={{ paddingLeft: "40px"}}>
                <p style={{ fontFamily: "Montserrat-Meduim", fontSize: "24px" }}> {name} </p>

                <div className='count'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
                <div>
                    {discount === true ?
                        <div>
                            <p className="Price" style={{ fontFamily: "Roboto-Bold", fontSize: "20px" }}>
                                <del>
                                    {price} DA
                                </del>
                            </p>
                            <p style={{ fontFamily: "Roboto-Bold", fontSize: "20px", color: "red" }}>
                                {newPriceAfterDisc} DA
                            </p>
                        </div>
                        :
                        <p className="Price" style={{ fontFamily: "Roboto-Bold", fontSize: "20px" }}>
                            {price} DA
                        </p>
                    }
                </div>
               
            </div>


        </div>
    )
}

export default CartItem
