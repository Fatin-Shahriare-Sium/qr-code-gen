import React, { useState } from 'react'
import useGenQrCode from '../hooks/useGenQRCode'

const InfoQRCode: React.FC = () => {
    let [qrUrl, setQrUrl] = useState('')
    let { genQrCode } = useGenQrCode()
    async function showQrCode(e: any) {
        e.preventDefault()
        console.log('e', e);
        let name = e.target[0].value
        let phoneNumber = e.target[1].value
        let gmail = e.target[2].value
        let address = e.target[3].value
        console.log(name, phoneNumber, gmail, address);
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
                {qrUrl && <img src={qrUrl} alt="" />}
                <a href={qrUrl} download='qr-code' >
                    <button>Download Qr Code</button>
                </a>
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
