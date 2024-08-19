import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { StoreContext } from '../Context/StoreContext'
function PaymentDetails() {
    const navigate = useNavigate()
    const { getTotalCartAmount, getTotalCartDiscount } = useContext(StoreContext)
    const totalAmount = getTotalCartAmount()
    const totalDiscount = getTotalCartDiscount()
    const totalWithDiscount = getTotalCartAmount() - getTotalCartDiscount()
    return (
        <div className='payment '>
            <div style={{ display: "flex" }}>
                <img src={assets.payment} style={{ width: "40px", paddingTop: "30px" }} />
                <p style={{ fontFamily: "Roboto-Bold", fontSize: "20px" }}>
                    Order Summary
                </p>
            </div>
            <hr />
            <div className='paymentDetails'>
                <div className='money'>
                    <p className='firstPmoney'>Total Without Discount and Delivery</p>
                    <p className='secondPmoney'>{totalAmount}DA</p>
                </div>
                <div className='money'>
                    <p className='firstPmoney'>Delivery</p>
                    <p className='secondPmoney'>200 DA</p>

                </div>
                <div className='money'>
                    <p className='firstPmoney' style={{ color: "#FA5252" }}>Discount</p>
                    <p style={{ color: "#FA5252" }} className='secondPmoney'>{totalDiscount} DA</p>
                </div>
                <div className='money'>
                    <p className='firstPmoney'>Total</p>
                    <p className='secondPmoney'>{totalAmount} DA</p>
                </div>

                <div className='money'>
                    <p className='firstPmoney'>Total With Discount and Delivery</p>
                    <p className='secondPmoney'>{totalWithDiscount + 200} DA</p>
                </div>
                <div className='checkOutBtn' style={{ display: "flex", justifyContent: "center" }}>
                    <button onClick={() => navigate("/Payment")}>Go to Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails;
