import React, { useContext } from 'react'
import { TestBooks, Books } from '../BookData'
import Card from '../components/Card'
import { assets } from '../assets/assets'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'
// import { useContext } from 'react'
function BookMoreInfo({ id, name, authorName, BookCover, discription, type, discount,discountPrice,price }) {
    const navigate = useNavigate()
    const { addToCart, cartItems } = useContext(StoreContext)
    const cartItemAmount = cartItems[id]
    let newPriceAfterDisc = price - (price * discountPrice)

    return (
        <div className='BookDetails' style={{ paddingLeft: "50px", paddingBottom:"40px"}}>
            <div className='BookCover'>
                <div className='BookImage' >
                    <img src={BookCover} />
                </div>
            </div>
            <div className='Details'>
                <p className='Title'>{name} By {authorName}</p>
                <p style={{ fontFamily: "Roboto-Bold", fontSize: "24px" }}>Synopsis</p>
                <p className='resume'>{discription}</p>
                <p style={{ fontFamily: "Roboto-Bold", fontSize: "24px" }}>Price :</p>
                <div>
                    {discount === true ?
                        <div>
                            <p className="Price" style={{ fontFamily: "Roboto-Bold", fontSize: "20px" }}>
                                <del>
                                    {price} DA
                                </del>
                            </p>
                            <p style={{ fontFamily: "Roboto-Bold", fontSize: "20px", color: "red" }}>
                                {newPriceAfterDisc} DA
                            </p>
                        </div>
                        :
                        <p className="Price" style={{ fontFamily: "Roboto-Bold", fontSize: "20px" }}>
                            {price} DA
                        </p>
                    }

                </div>









                <p style={{ fontFamily: "Roboto-Bold", fontSize: "24px", paddingTop: "20px" }}>Type</p>
                <div className='BookType'>
                    {type.map((item, index) => <Card key={index} type={item} />)}
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
                    <button onClick={() => addToCart(id)}> Add to cart{cartItemAmount > 0 && <> ({cartItemAmount}) </>} <img src={assets.cartShop} style={{ width: "30px", paddingLeft: "10px" }} /></button>
                </div>
            </div>
        </div>
    )
}

export default BookMoreInfo

