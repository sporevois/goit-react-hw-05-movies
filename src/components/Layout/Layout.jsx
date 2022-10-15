import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            timeout={10000}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
