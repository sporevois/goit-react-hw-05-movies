import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <BiArrowBack size="20" />
      {children}
    </Link>
  );
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};
