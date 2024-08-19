import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
function EmptyCart() {
    const navigate = useNavigate()
    return (
        <div  className='cartElements'>
            < div className='emptyCartImage' >
                <img src={assets.emptyCart} style={{ width: "300px" }} />
            </div >
            <p className='firstParagraphEmptyCart'>Your Cart is Empty</p>
            <p className='secondParagraphEmptyCart'>Looks like you haven't added anything to your cart yet</p>
            <div className='shopBtn'>
                <button onClick={() => navigate('/Shop')}>Start Shopping</button>
            </div>

        </div>
    )
}

export default EmptyCart
