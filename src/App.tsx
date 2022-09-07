import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './features/dashboard';

const App: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default App;
