import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import routes from '../routes/routes';

import StyledApp from './styles';

function App() {
  return (
    <StyledApp>
      <CssBaseline />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </StyledApp>
  );
}

export default App;
