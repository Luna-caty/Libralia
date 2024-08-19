import React from 'react'
import { TestBooks } from '../BookData'
import BookDetail from './BookDetail'
import { Link, useNavigate } from 'react-router-dom'

function BooksHome() {
    const style =
    {
        fontFamily: "Roboto-Regular",
        fontSize:"28px"
    }
    const navigate =useNavigate()
    return (
        <>
            <p style={style}>Quick View</p>
            <div className='ThreeBooksHome' style={{ paddingTop: "10px",cursor:"pointer" }}>
                {TestBooks.map(item => <BookDetail  key ={item.id} id={item.id} name={item.name} authorName={item.authorName} price={item.price} bookCover={item.BookCover} stocked={item.stocked}/>)}
            </div>
            <Link to='/Shop' className='testLink'>View All</Link>
        </>

    )
}

export default BooksHome
