import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './containers/header/Header'
import Footer from './containers/footer/Footer'
import * as routes from './routes'
import * as layout from './layouts'

const App = () => {

  return (

    <BrowserRouter>

      <Header />

      <Routes>
        <Route element={<layout.BaseLayout />}>
          <Route path='/' element={<routes.Home />} />
          <Route path='/project' element={<routes.Project />} />
        </Route>
      </Routes>

      <Footer />

    </BrowserRouter>

  )
}

export default App