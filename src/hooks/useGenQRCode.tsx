import React from 'react';
import QrCode from 'qrcode'

const useGenQrCode = () => {
    async function genQrCode(data: string): Promise<string> {
        let url = await QrCode.toDataURL(data, { errorCorrectionLevel: 'M' })
        return url
    }
    return { genQrCode }
}

export default useGenQrCode;