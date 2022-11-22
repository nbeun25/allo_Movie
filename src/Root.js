import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Details from './components/Details'
import Favoris from './components/Favoris'

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route exact path='/movie/:id' element={<Details />} />
                <Route exact path='/fav' element={<Favoris />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Root