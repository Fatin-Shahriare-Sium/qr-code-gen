import React from 'react'

const usePrint = () => {
    function qrPrinting(url: string) {
        var a = window.open('');
        a?.document.write(`<div>
        <img src=${url} />
        <img src=${url} />
        <img src=${url} />
        <img src=${url} />
        <img src=${url} />
        <img src=${url} />
        <img src=${url} />
        <img src=${url} />
        <img src=${url} />
        <img src=${url} />
        <img src=${url} />
        <img src=${url} />
        <img src=${url} />
        </div>`)
        a?.print()
    }

    return { qrPrinting }
}

export default usePrint;