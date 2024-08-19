import React from 'react'
import { assets } from '../assets/assets'
function Features() {
    return (
        <div className='features'>
            {/* Discount Feature */}
            <div className='featureCard'>
                <div  className='icon'>
                    <img src={assets.disocunt} width={55} />
                </div>
                <div className='title' style={{ display: "flex", justifyContent: "center" }}>
                    <p>Big Discounts</p>
                </div>
                <div className='explication' style={{display:"flex" ,justifyContent:"center" }}>
                    <p>Take advantage of exceptional discounts on a wide range of products. Our promotional offers allow you to save significantly while enjoying the quality you deserve. Don't miss these limited-time opportunities to get your favorite items at unbeatable prices</p>
                </div>
            </div>

            {/* exclusivity Feature */}
            
            <div className='featureCard'>
                <div className='icon'>
                    <img src={assets.exclusive} width={55} />
                </div>
                <div className='title' style={{ display: "flex", justifyContent: "center" }}>
                    <p>Exclusive Books</p>
                </div>
                <div className='explication' style={{display:"flex" ,justifyContent:"center"}}>
                    <p> Explore our collection of rare books and limited editions. These unique volumes, carefully curated, offer an unparalleled reading experience for enthusiasts and collectors alike. Enrich your library with literary treasures unavailable elsewhere </p>
                </div>
            </div>

            {/* Delivery Feature */}
            
            <div className='featureCard'>
                <div  className='icon'>
                    <img src={assets.delivery} width={80} style={{paddingTop:"10px"}} />
                </div>
                <div className='title' style={{ display: "flex", justifyContent: "center" }}>
                    <p style={{paddingTop:"15px"}}>Quick Delivery</p>
                </div>
                <div className='explication' style={{display:"flex" ,justifyContent:"center"}}>
                    <p> Experience lightning-fast shipping with our efficient delivery service. We prioritize speed and reliability to ensure your orders arrive at your doorstep in record time. Enjoy the convenience of prompt delivery without compromising on the quality of your shopping experience.</p>
                </div>
            </div>




        </div>
    )
}

export default Features
