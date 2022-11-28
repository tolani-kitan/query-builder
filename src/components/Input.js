import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  id,
  value,
  onChange,
  placeholder,
  disabled,
  required = true,
  className
}) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.node,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  className: PropTypes.string
};

export default Input;
