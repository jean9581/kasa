import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './home/home';
import Logement from './logement/logement';
import About from './about/about';
import Error from './error/error';

function route() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
  }
  
  export default route;