import React,{useContext} from 'react'
import { StoreContext } from '../Context/StoreContext'
function Filter() {
    
    const {setDiscount,toggleDiscount} = useContext(StoreContext)
    return (
        <div className='FilterShop'>
            <form className='BooksGenre'>
                <p>Genres Of Books</p>
                <div>
                    <input type='checkbox' />
                    <label for='ALL'>All</label>
                </div>
                <div>
                    <input type='checkbox' />
                    <label for='Science Fiction'>Science Fiction</label>
                </div>
                <div>
                    <input type='checkbox' />
                    <label for='Adventure'>Adventure</label>
                </div>
                <div>
                    <input type='checkbox' />
                    <label for='Fantasy'>Fantasy</label>
                </div>
                <div>
                    <input type='checkbox' />
                    <label for='Romance'>Romance</label>
                </div>
                <div>
                    <input type='checkbox' />
                    <label for='manga'>Manga</label>
                </div>
                <div>
                    <input type='checkbox' />
                    <label for='LightNovel'>Light Novel</label>
                </div>
                <div>
                    <input type='checkbox' />
                    <label for='religion'>Religion</label>
                </div>
                <div>
                    <input type='checkbox' />
                    <label for='schoolUni'>School/University</label>
                </div>
                <div>
                    <input type='checkbox' />
                    <label for='horror'>Horror</label>
                </div>
                <p>Price Range</p>
                <div className='PriceRange'>
                    <div style={{ fontFamily: "Roboto-Bold", paddingBottom: "30px" }}>200</div>
                    <input type='range' min={200} max={4500} style={{width:"100px"}} />
                    <div style={{ fontFamily: "Roboto-Bold", paddingBottom: "20px" }}>4500</div>
                </div>
                <div className='PriceFilter'>
                    <p>Price Filter</p>
                    <div>
                        <input type='checkbox' />
                        <label for='lowestHigh'> Lowest To Highest Price</label>
                    </div>
                    <div>
                        <input type='checkbox' />
                        <label for='HighestLow'>Highest To Lowest Price</label>
                    </div>
                </div>
                <div className='discountFilter'>
                    <p>Discount Filter</p>
                    <div>
                        <input type='checkbox' onChange={toggleDiscount}  />
                        <label for='withDisc'> With Discount</label>
                    </div>
                    <div>
                        <input type='checkbox' />
                        <label for='WithoutDisc'>Without discount</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Filter
