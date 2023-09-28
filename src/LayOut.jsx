import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayOut;
