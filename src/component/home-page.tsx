import React, { ReactFragment } from 'react'
import qrLandImg from '../image/qr-land.jpg'
import qrIcon from '../image/qr-icon.svg'
import { Link } from 'react-router-dom';
let Homepage:React.FC=()=> {
  return (
    <div className='homepage-wrapper'>
        <div className='homepage-conatiner'>
            <div className='homepage-conatiner__1'>
                <div>
                    <img className='qr-logo' src={qrIcon} alt="" />
                    <h1>QR CODE GENERATOR.</h1>
                    <Link to={"/gen-qr-code"}>
                    <button  className='gen-btn-home'>Generate</button>
                    </Link>
                    
                </div>
            </div>
            <div className='homepage-conatiner__2'>
                <img src={qrLandImg} alt="fff" />
            </div>
        </div>
    </div>
  )
}

export default Homepage;