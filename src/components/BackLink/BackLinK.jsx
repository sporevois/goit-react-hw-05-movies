import { BiArrowBack } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { BackLink } from './BackLink.styled';

const GoBackLink = ({ to, children }) => {
  return (
    <BackLink to={to}>
      <BiArrowBack size="20" />
      {children}
    </BackLink>
  );
};

export default GoBackLink;

GoBackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};
