import React, { useState } from 'react'
import useGenQrCode from '../hooks/useGenQRCode';
import usePrint from '../hooks/usePrint';

function TextQrCode() {
    let [qrUrl, setQrUrl] = useState<string>('')
    let [qrName, setQrName] = useState<string>('')
    let { genQrCode } = useGenQrCode()
    let { qrPrinting } = usePrint()
    async function showQrCode(event: any) {
        event.preventDefault()
        let data: string = event.target[1].value
        let qrNamex: string = event.target[0].value
        setQrName(qrNamex)
        console.log(event);
        let urlx = await genQrCode(data)
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
        <div style={{ width: '90%', margin: "auto" }}>
            <p style={{ fontSize: "4rem", fontWeight: 700, textAlign: 'center' }}>Text Qr Code</p>
            <div>
                <form onSubmit={(event) => showQrCode(event)}>
                    <div className='form-group'>
                        <p>Name</p>
                        <input type='text' />
                    </div>
                    <div className='form-group'>
                        <p>Text</p>
                        <textarea />
                    </div>

                    <button className='gen-btn' type='submit'>Generate Qr Code</button>
                </form>
                {showBelow()}
            </div>

        </div>
    )
}

export default TextQrCode;
