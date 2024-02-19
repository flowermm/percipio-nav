import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import TestScene from '../scenes/test-scene';

import App from './app';

const Routing = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />} errorElement={<div>Whoops</div>}>
      <Route path="/nav-fun" element={<TestScene />} />
    </Route>,
  ),
);

export default Routing;
