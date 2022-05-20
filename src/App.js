import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleCocktail from './pages/SingleCocktail-JohnMethod'
import Cocktails from './pages/Cocktails'
import Error from './pages/Error'
import SharedProductsLayout from './sharedLayout/SharedProductsLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedProductsLayout/>}>
            <Route index element={<Cocktails/>}/>
            <Route path='cocktails/:id' element={<SingleCocktail/>}/>
            <Route path='*' element={<Error/>}/>           
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
