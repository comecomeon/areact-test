import React from 'react';
import '@/_Base.scss';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@layouts/DefaultLayout.jsx';
import Notfound from '@layouts/notfound/Notfound.jsx';
import Home from '@pages/Home.jsx';
import State01 from '@pages/State01';
import State02 from '@pages/State02';

function App() {

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/state01' element={<State01 />} />
          <Route path='/state02' element={<State02 />} />
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
