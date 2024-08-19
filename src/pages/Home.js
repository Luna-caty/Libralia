import React,{useContext} from 'react'
import Header from '../components/Header'
import BooksHome from '../components/BooksHome'
import ContactUs from '../components/ContactUs'
import { StoreContext } from '../Context/StoreContext'
import Features from '../components/Features'
import WhoWeAre from '../components/WhoWeAre'
function Home() {
  const { setMenu } = useContext(StoreContext)
  setMenu('Home')
  return (
    <div className='HomePage'>
        <Header/>
        <BooksHome/>
        <WhoWeAre/>
        <Features/>
        <ContactUs/>
    </div>
  )
}

export default Home
