import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";

const Input = ({ value, onInput, type, errorMessage, label, name, htmlId }) => (
  <div className="form-group">
    {
      label
      ?
      <label htmlFor={ htmlId } className="control-label">{ label }</label>
      :
      <></>
    }
    <input
      type={ type }
      value={ value }
      onChange={ onInput }
      name={ name }
      id={ htmlId }
      className="form-control" />
    <span className="error">{ errorMessage }</span>
  </div>
);

Input.propTypes = {
  /* The value provided to the input HTML tag */
  value: PropTypes.string.isRequired,
  // onInput is a function
  onInput: PropTypes.func.isRequired,
  // type one of
  type: PropTypes.oneOf([ 'text', 'password', 'submit', 'email', 'number' ]),
  //error message string
  errorMessage: PropTypes.string,
  //lable string
  label: PropTypes.string,
  //name string is required
  name: PropTypes.string.isRequired,
  //html id string is required
  htmlId: PropTypes.string.isRequired,
}

export default Input;