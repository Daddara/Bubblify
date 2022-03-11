import React from "react";
import "./styles.css";

const Form = ({ onSubmit, children }) => {
    return(
    <form onSubmit={onSubmit} className="form-horizontal">
        {children}
    </form>
    )
}

export default Form;