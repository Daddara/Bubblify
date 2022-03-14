import React from "react";
import "./styles.css";
import propTypes from 'prop-types';

const Form = ({ onSubmit, children }) => {
    return(
    <form onSubmit={onSubmit} className="form-horizontal">
        {children}
    </form>
    )
}

Form.propTypes = {
    //children array
    children: propTypes.array.isRequired
}

export default Form;