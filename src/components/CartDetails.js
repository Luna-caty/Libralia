import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'
import { Books } from '../BookData'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
function CartDetails() {
    const navigate = useNavigate()
    const { cartItems } = useContext(StoreContext)
    const isCartEmpty = () => {
        for (let itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                return false;
            }
        }
        return true;
    }
    if (isCartEmpty()) {
        return <EmptyCart />
    }
    return (
        <div>
            <div className='cartElements'>
                <div>
                    {Books.map((item) => {
                        if (cartItems[item.id] !== 0) {
                            return <CartItem key={item.id} id={item.id} name={item.name} BookCover={item.BookCover} price={item.price} discount={item.discount} discountPrice={item.discountPrice} />
                        }

                    }
                    )}

                </div>

            </div>


        </div>
    )
}

export default CartDetails
