import React, { useContext, useState } from 'react'
import { Books } from '../BookData'
import BookDetail from './BookDetail'
import BooksDetailsShop from './BooksDetailsShop'
import { StoreContext } from '../Context/StoreContext'
function AllBooks() {
    const { searchTerm, setSeatchTerm } = useContext(StoreContext)
   

    return (
        <div>
            <div className='shopBooks'>
                {Books.filter((value) => {
                    if (searchTerm === "") {
                        return value
                    }
                    else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value
                    }

                }

                )
                    .map(item => <BooksDetailsShop key={item.id} id={item.id} name={item.name} authorName={item.authorName} price={item.price} bookCover={item.BookCover} discount={item.discount} discountPrice={item.discountPrice} stocked={item.stocked} />)}
            </div>

        </div>
    )
}

export default AllBooks
