import React, { useContext } from "react";
import { assets } from "../assets/assets";
import "../components/style.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StoreContext } from "../Context/StoreContext";
const NavBar = () => {
    const navigate = useNavigate()

    const {setSeatchTerm, menu, setMenu } = useContext(StoreContext)


    return (
        <>
            <div>
                <div className="nav">
                    <p className="navBarText">
                        <img src={assets.logo} style={{ paddingRight: "10px" }} />
                        Libralia
                    </p>
                    <ul>
                        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}> <Link to='/'>Home</Link> </li>
                        <li onClick={() => setMenu("Shop")} className={menu === "Shop" ? "active" : ""} > <Link to='/Shop'>Shop</Link></li>
                        <li onClick={()=>navigate('/#WhoWeAre')}> <a href="#WhoWeAre"> About Us</a></li>
                        <li onClick={()=>navigate('/#Contact')}> <a href="#Contact"> Contact</a></li>
                    </ul>
                    {menu === "Shop" ?
                        <div className="searchDiv" style={{ paddingTop: "20px", display: "flex" }}>
                            <div>
                                <img src={assets.search} alt="" style={{ height: "30px" }} />
                            </div>


                            <input type="text" placeholder="Search" className="inputNav" onChange={event => { setSeatchTerm(event.target.value) }} />
                        </div>
                        :
                        <>
                        </>

                    }

                    <div className="WishList&Cart" style={{ paddingTop: "20px" }}>
                        <a><img src={assets.heart} alt="heartIcon" style={{ width: "40px", paddingRight: "10px" }} /></a>
                        <a><img src={assets.cart} alt="cartIcon" style={{ width: "40px", cursor: "pointer" }} onClick={() => navigate('Cart')} /></a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavBar