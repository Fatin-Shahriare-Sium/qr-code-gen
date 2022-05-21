import React from 'react'
import { Outlet } from 'react-router'

function QrCodeTab() {
    return (
        <div>
            <div className='qr-code-tab__wrapper'>
                <div className='qr-code-tab__container'>
                    <div className='qr-code-tab__single'>
                        <p>Info</p>
                    </div>
                    <div className='qr-code-tab__single'>
                        <p>Wifi</p>
                    </div>
                    <div className='qr-code-tab__single'>
                        <p>Text</p>
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default QrCodeTab;
