import React,{useContext} from 'react'
import BookMoreInfo from '../components/BookMoreInfo'
import { Books } from '../BookData'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'
function BookInfo() {
  const { id } = useParams();
  const book = Books.find(book => book.id === id);
  const {setMenu } = useContext(StoreContext)
  setMenu('BookInfo')


  return (
    <div>
      <BookMoreInfo {...book} />
    </div>
  )
}

export default BookInfo
