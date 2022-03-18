import React, { useState } from 'react'
import useGenQrCode from '../hooks/useGenQRCode'
import usePrint from '../hooks/usePrint'

const PhoneQrCode = () => {
    let [qrUrl, setqrUrl] = useState<string>('')
    let [qrName, setQrName] = useState<string>('Qr-TelePhone')
    let { genQrCode } = useGenQrCode()
    let { qrPrinting } = usePrint()
    async function showQrCode(e: any) {
        e.preventDefault()
        let number = e.target[0].value
        let url = await genQrCode(`TEL:${number}`)
        return setqrUrl(url)
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
            <p style={{ fontSize: "4rem", fontWeight: 700, textAlign: 'center' }}>Phone Qr Code</p>
            <div>
                <form onSubmit={(event) => showQrCode(event)}>
                    <div className='form-group'>
                        <p>Phone Number</p>
                        <input type="number" />
                    </div>
                    <button className='gen-btn' type='submit'>Generate Qr Code</button>
                </form>
                {showBelow()}
            </div>
        </div>
    )
}

export default PhoneQrCode;
