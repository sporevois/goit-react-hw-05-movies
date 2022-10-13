import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <BiArrowBack size="20" />
      {children}
    </Link>
  );
};

export default BackLink;
