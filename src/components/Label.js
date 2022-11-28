import PropTypes from 'prop-types';

const Label = ({ label, id, className }) => {
  return <div className={className}>{label && <label htmlFor={id}>{label}</label>}</div>;
};

Label.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
};

export default Label;
