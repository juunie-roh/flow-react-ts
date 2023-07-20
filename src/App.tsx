import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './containers/header/Header'
import Footer from './containers/footer/Footer'
import * as routes from './routes'
import * as layout from './layouts'
import ScrollToTop from './components/ScrollToTop'

const App = () => {

  return (

    <BrowserRouter>

      <ScrollToTop />
      <Header />

      <Routes>
        <Route element={<layout.BaseLayout />}>
          <Route path='/' element={<routes.Home />} />
          <Route path='/project' element={<routes.Project />} />
          <Route path='/task' element={<routes.Task />} />
          <Route path='/chatting' element={<routes.Chatting />} />
          <Route path='/okr' element={<routes.Okr />} />
          <Route path='/video' element={<routes.Video />} />
          <Route path='/security' element={<routes.Security />} />
        </Route>
      </Routes>

      <Footer />

    </BrowserRouter>

  )
}

export default App