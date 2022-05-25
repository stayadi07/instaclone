import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import "./App.css"
import LandingPage from './Components/LandingPage'
import Postview from './Postview'
import Form from './Components/Form'


export default function App() {
  return (
    <div className='App-wrapper'>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path='/postview' element={<Postview/>}/>
            <Route path="/Form" element={<Form />} />
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}
