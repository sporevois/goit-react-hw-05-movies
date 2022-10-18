import { LoaderBox, Overlay } from './Loader.styled';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
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
);

export default Loader;
