import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/Nav";
import HomePage from "./components/Header"
import BookDetail from "./components/BookDetail";
import { Books } from "./BookData";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./components/Footer"
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";


// import the pages one by one

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="Shop" element={<Shop />} >
          </Route>
          <Route path="/BookInfo/:id" element={<BookInfo/>}/>
          <Route path="Cart" element={<Cart/>}/>
          <Route path="Payment" element= {<Payment/>}/>

        </Routes>
        <Footer />

      </div>

    </>












  );
}

export default App;
