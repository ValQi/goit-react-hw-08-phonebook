import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle/>
    </>
  );
};