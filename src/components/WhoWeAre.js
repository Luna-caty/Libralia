import React from 'react'
import { assets } from '../assets/assets'
function WhoWeAre() {
    const ParagraphStyling =
    {
        fontFamily: "Roboto-Bold",
        fontSize: "30px",
        textAlign: "center"
    }
    const ParagraphStyling2 =
    {
        fontFamily: "Roboto-Light",
        fontSize: "24px",
        width: "700px",
        textAlign: "center",
    }
    return (
        <div style={{display:'flex',flexDirection:'row-reverse', paddingRight:"30px"}}>
            <img src={assets.whoWeAre} />
            <div className='WhoWeAre' id='WhoWeAre' style={{paddingBottom:"30px", paddingRight:"200px"}}>
                <p style={ParagraphStyling}>Who we are</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p style={ParagraphStyling2}>
                        Welcome to Libralia ,Your online bookstore, where every page turned brings a new adventure. We are passionate about books and committed to connecting readers with the stories that move them. From bestsellers to hidden gems, our curated collection is designed to cater to all tastes and interests. Whether you’re a casual reader or a literary aficionado, our mission is to provide a seamless and enjoyable book-buying experience, delivered right to your door. Dive into our world and discover the magic that only a good book can offer.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default WhoWeAre
