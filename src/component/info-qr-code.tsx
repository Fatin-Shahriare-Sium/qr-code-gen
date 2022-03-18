import React, { useState } from 'react'
import useGenQrCode from '../hooks/useGenQRCode'
import usePrint from '../hooks/usePrint'

const InfoQRCode: React.FC = () => {
    let [qrUrl, setQrUrl] = useState<string>('')
    let [qrName, setQrName] = useState<string>()
    let { genQrCode } = useGenQrCode()
    let { qrPrinting } = usePrint()
    async function showQrCode(e: any) {
        e.preventDefault()
        console.log('e', e);
        let name = e.target[0].value
        let phoneNumber = e.target[1].value
        let gmail = e.target[2].value
        let address = e.target[3].value
        console.log(name, phoneNumber, gmail, address);
        setQrName(`${name}-info-qr-code`)
        let urlx = await genQrCode(`
        Name:${name}
        phoneNumber:${phoneNumber}
        gmail:${gmail}
        address:${address}`)

        return setQrUrl(urlx)
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
        <div style={{ width: '90%', margin: 'auto' }} className='info-qr-wrapper'>
            <p style={{ fontSize: '4rem', fontWeight: '700', textAlign: 'center' }}>Info QR Code</p>

            <div className='form info-qr'>
                <form onSubmit={(event) => showQrCode(event)}>
                    <div className='form-group'>
                        <p>Your Name</p>
                        <input type="text" />
                    </div>
                    <div className='form-group'>
                        <p>Phone Number</p>
                        <input type="number" />
                    </div>
                    <div className='form-group'>
                        <p>Gmail</p>
                        <input type="text" />
                    </div>
                    <div className='form-group'>
                        <p>Address</p>
                        <textarea></textarea>
                    </div>

                    <button className='gen-btn' type='submit'>Generate QR</button>
                </form>
                {showBelow()}
            </div>

        </div>
    )
}


export default InfoQRCode;
