import React from 'react'
import { assets } from '../assets/assets'
function ContactUs() {

    return (
        <>
            <div className='Contact' id='Contact'>
                <div style={{paddingTop:"50px"}}>
                    <img src={assets.contactUs} />
                </div>

                <div style={{ paddingLeft: "200px" }}>
                    <p style={{ fontFamily: "Roboto-Bold", fontSize: "30px" }}>Get It Touch</p>
                    <p style={{ fontFamily: "Roboto-Light", fontSize: "24px" }}>24/7 WE WILL ANSWER YOUR QUESTIONS AND PROBLEMS </p>
                    <div className='inputs'>
                        <div style={{ paddingBottom: "20px" }}>
                            <input type='text' placeholder='Enter Your Full Name' className='inputContact' required />
                        </div>
                        <div>
                            <input type='email' placeholder='Enter Your Email' className='inputContact' required />
                        </div>
                        <br />
                        <div style={{ paddingBottom: "20px" }}>
                            <textarea placeholder='Enter Your Message , We are Listening' rows={15} style={{ width: "400px", backgroundColor: "#D9D9D9" }} required />
                        </div>

                    </div>
                    <button className='ContactBtn' type='submit'>Submit Message</button>
                </div>




            </div>

        </>
    )
}

export default ContactUs
