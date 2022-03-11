import React, { Component } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Views
import NotFound from './views/NotFound';
import SignIn from "./views/signIn";
import MiniDrawer from "./views/dashboard";
//Protected Route
import { RequireToken } from "./Auth";


export default class Path extends Component {
  render() {
    return (
       <BrowserRouter>
      <Routes>
          <Route path="/dashboard" element={<MiniDrawer />} />
         <Route path="/" element={<SignIn/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     </BrowserRouter>
    );
  }
}