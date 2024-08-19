import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom'
const Header = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="HeroSec" style={{ paddingBottom: "200px" }}>
                <div className="HeroSectionText">
                    <div>
                        <p className="firstTextHero">
                            GET YOUR FAVOURITE BOOK TO YOUR DOOR
                        </p>
                        <p className="secondTextHero">
                            Explore our curated collection and have bestsellers, classics, or new releases delivered to your door. Enjoy the world of reading from the comfort of your home.
                        </p>
                        <button className="heroButton" onClick={() => navigate('Shop')}>See Our Books</button>
                    </div>

                </div>
                <div className="HeaderPictures">
                    <img src={assets.firstPicture} alt="" style={{ zIndex: 1, position: "relative", paddingLeft: "215px" }} />
                    <img src={assets.secondPicture} alt="" style={{ zIndex: 0, position: "absolute", paddingTop: "185px", height: "350px" }} />
                </div>

            </div>


        </>



    );

}
export default Header