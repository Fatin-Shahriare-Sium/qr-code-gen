import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InfoQRCode from './component/info-qr-code'
import logo from './logo.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<p style={{ fontSize: "3rem", fontWeight: '700', textAlign: 'center' }}>Allah is Almighty</p>}></Route>
        <Route path='/gen-qr-code' element={<InfoQRCode />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
