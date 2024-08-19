import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../Context/StoreContext'

function PaymentInfo() {
    const {getTotalCartAmount,getTotalCartDiscount} = useContext(StoreContext)
    const totalWithDiscountAndDelivery = getTotalCartAmount() - getTotalCartDiscount() + 200
    return (
        <div style={{ paddingLeft: "90px", paddingBottom:"50px" }} className='PaymentDetails'>
            <div className='PersonalInfo'>
                <div className='TitlePayment'>
                    <div style={{ padding: "20px 20px 0px 0px " }}>
                        <img src={assets.PaymentDetails} />
                    </div>
                    <p style={{ fontFamily: "Roboto-Black", fontSize: "30px" }}>PAYMENT DETAILS</p>
                </div>
                <div style={{ paddingBottom: "30px" }}>
                    <div className='Info'>
                        <div className='ImageAndTitle'>
                            <img src={assets.Person} style={{ height: "39px" }} />
                            <p style={{ fontFamily: "Roboto-Meduim", paddingLeft: "10px" }}>NAME ON THE CARD</p>
                        </div>
                        <div className='rectangleInfo'>
                            <input placeholder='Your Full Name' className='NameAndCard' required type='text'/>
                        </div>
                    </div>
                </div>

                <div className='Info'>
                    <div className='ImageAndTitle'>
                        <img src={assets.creditCard} style={{ height: "39px" }} />
                        <p style={{ fontFamily: "Roboto-Meduim", paddingLeft: "10px" }}>CARD NUMBER</p>
                    </div>
                    <div className='rectangleInfo'>
                        <input placeholder='XXXX-XXXX-XXXX-XXXX' className='NameAndCard' required maxLength={16} />
                    </div>
                </div>

                <div className='DateCode' style={{ display: "flex", paddingTop: "30px" }}>

                    <div className='Info'>
                        <div className='ImageAndTitle'>
                            <img src={assets.Date} style={{ height: "39px" }} />
                            <p style={{ fontFamily: "Roboto-Meduim", paddingLeft: "10px" }}>EXPIRATION DATE</p>
                        </div>
                        <div className='rectangleInfo'>
                            <input placeholder='MM/YY' className='dateCodeInfo' required />
                        </div>
                    </div>

                    <div className='Info' style={{ paddingLeft: "60px" }}>
                        <div className='ImageAndTitle'>
                            <img src={assets.code} style={{ height: "39px" }} />
                            <p style={{ fontFamily: "Roboto-Meduim", paddingLeft: "10px" }}>CVC/CVV</p>
                        </div>
                        <div className='rectangleInfo'>
                            <input placeholder='***' className='dateCodeInfo' required maxLength={3} type='password'/>
                        </div>
                    </div>

                </div>
                <div className='PayBtn' style={{ display: "flex" ,paddingTop:"30px"}}>
                    <button style={{width:"160px"}}>Pay {totalWithDiscountAndDelivery} Da</button>
                </div>

                <div className='creditCard' style={{ paddingTop: "30px" }}>
                    <p>We Accept Payment With This Cards </p>
                    <div className='CreditCardImages'>
                        <img src={assets.masterCrad} style={{ height: "40px" }} />
                        <img src={assets.AlgeriePoste} style={{ height: "40px" }} />
                        <img src={assets.Visa} style={{ height: "40px" }} />
                        <img src={assets.Paypal} style={{ height: "40px" }} />
                    </div>
                </div>

            </div>
            <img src={assets.PaymentWoman} style={{height:"300px" ,padding:"100px 90px 0px 0px"}} />

        </div>
    )
}

export default PaymentInfo
