import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './Home';
import Logement from './logement';
import About from './about';
import Error from './error';

function route() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/description" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
  }
  
  export default route;