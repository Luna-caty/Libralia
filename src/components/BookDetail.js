import React from "react";
import "../components/style.css"
import { useNavigate } from "react-router-dom";
const BookDetail = ({ id,name, authorName, price, bookCover, stocked }) => {
    const navigate = useNavigate()
    return (
        <>
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <>
                    <div >
                        {stocked === false
                            ?
                            <div className="Picture" style={{cursor:"not-allowed"}} >
                                <div className='outOfSTock' >
                                    <div  className = 'StockSentence'>
                                        OUT OF STOCK
                                    </div>
                                    <div>
                                        <img src={bookCover} style={{ zIndex: -1, position: "relative", height: "305px", width: "200px"}}  />
                                    </div>
                                </div>
                            </div>
                            :
                            <img src={bookCover} style={{ zIndex: -1, position: "relative", height: "305px", width: "200px" }} />
                        }

                    </div>

                </>
                <p className="BooksInfo">
                    {name}
                    <br />
                    {authorName}
                </p>
                <p className="Price" style={{ fontFamily: "Roboto-Bold", fontSize: "20px" }}>
                    {price} DA
                </p>
                {stocked===true
                   ?
                   <button className="BookBtn" onClick={() => navigate(`/BookInfo/${id}`)}>See more Details</button>
                   :
                   <button className="BookBtn" onClick={() => navigate(`/BookInfo/${id}`)} style={{visibility:"hidden"}}>See more Details</button>
                }
            </div>


        </>
    );

}
export default BookDetail