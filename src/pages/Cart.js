import React from 'react'
import CartDetails from '../components/CartDetails'
import PaymentDetails from '../components/PaymentDetails'
function Cart() {
  return (
    <div className='cartTotal' style={{ padding: "40px 40px 40px 0px" }}>
      <CartDetails/>
      <PaymentDetails/>
    </div>
  )
}

export default Cart
