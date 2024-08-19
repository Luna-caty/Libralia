import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Footer() {
    const navigate =useNavigate()
    return (
        <div className='footer'>
            <div className='LeftSideFooter'>
                <p className='FooterPragraph'> Useful Links</p>
                <Link to ='/'>Home</Link>
                <a href='#'>Categories</a>
                <a href='#'>FAQ</a>
            </div>
            <div className='CenterSideFooter'>
                <p className='FooterPragraph'>Socials</p>
                <div>
                    <img src={assets.instagram} alt='' style={{width:"30px" ,paddingRight:"10px"}}/>
                    <a href='#'>@LibraliaBookstore</a>
                </div>
                <div>
                    <img src={assets.facebook} alt='' style={{width:"20px" ,paddingRight:"10px"}}/>
                    <a href='#' style={{paddingTop:"10px"}}>LibraliaBookstore</a>
                </div>
            </div>
            <div className='RightSideFooter'>
                <p className='FooterPragraph'>Informations</p>
                <div>
                    <img src={assets.emplacement} alt='' style={{width:"50px"}}/>
                    <p className='RightSideParagraph'>Rue ali khouja el biar</p>
                </div>
                <div>
                    <img src={assets.phone} alt='' style={{height:"40px"}}/>
                    <p  className='RightSideParagraph'>+213 750 890 120</p>
                </div>
            </div>

            



        </div>
    )
}

export default Footer;
