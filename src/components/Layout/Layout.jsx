import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { OutletBox } from './Layout.styled';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
