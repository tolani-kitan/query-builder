import PropTypes from 'prop-types';

const Button = ({ type = 'button', buttonText, onClick, loading, className }) => {
  return (
    <div>
      <button type={type} onClick={onClick} disabled={loading} className={className}>
        {buttonText}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;
