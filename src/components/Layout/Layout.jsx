import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderBox, Overlay } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <Overlay>
            <LoaderBox>
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="lightcoral"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                timeout={10000}
              />
            </LoaderBox>
          </Overlay>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
