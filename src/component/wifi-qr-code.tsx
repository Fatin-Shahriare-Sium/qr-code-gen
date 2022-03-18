import React, { useState } from 'react'
import useGenQrCode from '../hooks/useGenQRCode'
import usePrint from '../hooks/usePrint'

const WifiQRCode: React.FC = () => {
    let [hide, setHide] = useState<boolean>(false)
    let [qrName, setqrName] = useState<string>('')
    let [qrUrl, setQrUrl] = useState<string>('')
    let { qrPrinting } = usePrint()
    let { genQrCode } = useGenQrCode()
    async function showQrCode(e: any) {
        e.preventDefault()
        let name = e.target[0].value
        let password = e.target[1].value
        let auth = e.target[2].value
        let url = await genQrCode(`WIFI:T:${auth};S:${name};P:${password};H:${hide};`)
        setqrName(`Wifi-${name}`)
        return setQrUrl(url)
    }

    function handleCheckbox() {
        return setHide((pre) => !pre)
    }

    function showBelow() {
        if (qrUrl) {
            return <>
                <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    {qrUrl && <img src={qrUrl} alt="" />}
                </div>
                <div style={{ width: '90%', margin: "auto", display: "flex", justifyContent: "space-between" }}>
                    <a id='download-btn' href={qrUrl} download={qrName} >
                        <button className='download-btn'>Download Qr Code</button>
                    </a>
                    <button className='print-btn' onClick={() => qrPrinting(qrUrl)}>Print QR</button>
                </div>
            </>
        }
    }


    return (
        <div style={{ width: "90%", margin: 'auto' }}>
            <p style={{ fontSize: '4rem', fontWeight: 700, textAlign: 'center' }}>Wifi Qr Code</p>
            <div>
                <form onSubmit={(event) => showQrCode(event)}>
                    <div className='form-group'>
                        <p>SSID/Network Name</p>
                        <input type="text" />
                    </div>
                    <div className='form-group'>
                        <p>Password</p>
                        <input type="text" />
                    </div>
                    <div className='form-group'>
                        <p>Authentication Type</p>
                        <select name="" id="">
                            <option value="onpass">No Password</option>
                            <option value="WPE">WPE</option>
                            <option value="WPA/WPA2">WPA/WPA2</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <p>Hideen</p>
                        <input onClick={handleCheckbox} checked={hide} style={{ width: 'auto' }} type="checkbox" />
                    </div>
                    <button type='submit' className='gen-btn'>Generate Qr</button>
                </form>
                {showBelow()}
            </div>
        </div>
    )
}

export default WifiQRCode;