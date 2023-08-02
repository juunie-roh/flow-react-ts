import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './contexts'
import * as routes from './routes'
import Header from './containers/header/Header'
import Footer from './containers/footer/Footer'
import * as layout from './layouts'
import ScrollToTop from './components/ScrollToTop'

const App = () => {

  return (

    <AuthContextProvider>

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
            <Route path='/system' element={<routes.System />} />
            <Route path='/download' element={<routes.Download />} />
          </Route>
        </Routes>

        <Footer />

      </BrowserRouter>

    </AuthContextProvider>

  )
}

export default App