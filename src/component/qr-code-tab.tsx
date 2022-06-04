import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import { Link, useLocation } from 'react-router-dom'
import infoSvg from '../image/info.svg';
import wifiSvg from '../image/wifi.svg'
import textSvg from '../image/text.svg'
function QrCodeTab() {
    let location = useLocation()
    useEffect(() => {
        console.log(location);

    }, [location])
    return (
        <div>
            <div className='qr-code-tab__wrapper'>
                <div className='qr-code-tab__container'>
                    <Link to='/gen-qr-code/info'>
                        <div className={location.pathname !== "/gen-qr-code/info" ? "qr-code-tab__single" : "qr-code-tab__single tab-active"}>
                            <img src={infoSvg} alt="" />
                            <p>Info</p>
                        </div>
                    </Link>
                    <Link to='/gen-qr-code/wifi'>
                        <div className={location.pathname !== "/gen-qr-code/wifi" ? "qr-code-tab__single" : "qr-code-tab__single tab-active"}>
                            <img src={wifiSvg} alt="" />
                            <p>Wifi</p>
                        </div>
                    </Link>
                    <Link to="/gen-qr-code/text">
                        <div className={location.pathname !== "/gen-qr-code/text" ? "qr-code-tab__single" : "qr-code-tab__single tab-active"}>
                            <img src={textSvg} alt="" />
                            <p>Text</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default QrCodeTab;
