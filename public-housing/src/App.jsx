import React from 'react';
import '@/_Base.scss';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@layouts/DefaultLayout.jsx';
import Notfound from '@layouts/notfound/Notfound.jsx';
import Home from '@pages/Home.jsx';
import Shhousing from '@pages/Shhousing.jsx';
import Lhhousing from '@pages/Lhhousing.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/sh' element={<Shhousing />} />
          <Route path='/lh' element={<Lhhousing />} />
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
