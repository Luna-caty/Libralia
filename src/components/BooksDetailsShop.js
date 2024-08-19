import React from 'react'
import { Books } from '../BookData'
import { Link, useNavigate } from 'react-router-dom'
function BooksDetailsShop({ id ,name, authorName, price, bookCover, discount, discountPrice, stocked }) {
    // we got "Nan" output cuz price was string so we did operations between string and float which the output can't be a number so we parsrFloat to change price(string) into float
    let newPriceAfterDisc = price - (price * discountPrice)
    const navigate = useNavigate()
    return (
        <>
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <>
                    <div>
                        {stocked === false
                            ?
                            <div className="Picture" >
                                <div className='outOfSTock' >
                                    <div className='StockSentence' style={{ cursor: "not-allowed" }}>
                                        OUT OF STOCK
                                    </div>
                                    <div>
                                        <img src={bookCover} style={{ zIndex: -1, position: "relative", height: "305px", width: "200px" }} />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='card' onClick={() => navigate(`/BookInfo/${id}`)} style={{ position: "relative", overflow: "hidden" }}>
                                <img src={bookCover} style={{ position: "relative", height: "305px", width: "200px" }} />
                                <div className='overlay'>
                                    <p className='HoverText'>Click here to see more details</p>
                                </div>

                            </div>


                        }

                    </div>
                </>

                <p className="BooksInfo">
                    {name}
                    <br />
                    {authorName}
                </p>
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

            </div>

        </>
    )
}

export default BooksDetailsShop
