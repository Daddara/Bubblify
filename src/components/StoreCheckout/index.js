import React from "react";
import { Redirect } from "react-router-dom";
import toastr from 'toastr';
import validator from 'validator';
import Form from '../Form';
import Input from '../Input';
import propTypes from 'prop-types';


class StoreCheckout extends React.Component{
    state = {
        redirect: false,
        fields: {
          name: '',
          telephone: ''
        },
        errors: {
          nameError: '',
          telephoneError: '',
        },
      }
    
      onInput(e) {
        this.setState({ fields: {
          ...this.state.fields,
          [ e.target.name ]: e.target.value,
        } });
      }
    
      validateForm() {
        const { name, telephone } = this.state.fields;
        const errors = {};
    
        if (name === '') { errors.nameError = 'Name is required.'; }
        if (telephone === '') { errors.telephoneError = 'Telephone is required.'; }
        if(validator.isNumeric(telephone) === false){
          errors.telephoneError = 'Not a valid phone number.'}
        if( validator.isMobilePhone(telephone) === false){
          errors.telephoneError = 'Not a valid phone number.';}
        if (Object.keys(errors).length > 0) {
          this.setState({ ...this.state.errors, errors });
          return false;
        }
    
        return true;
      }
    
      submitForm(e) {
        e.preventDefault();
        if (!this.validateForm()) {
          toastr.error('Please enter the reqiured fields', 'Failed!');
        } else {
        
          localStorage.setItem('user', JSON.stringify(this.state.fields));
          toastr.success('The form was successfully submitted!', 'Success!');
          this.setState({ redirect: true });
          // Redirect
        }
      }

    render(){
        
        const { name, telephone} = this.state.fields;
        const { nameError, telephoneError } = this.state.errors;
        return(
            // Render a form
            <>
        <h1 className="h1Bundles">Contact information</h1>
        <div className="formDiv">
        <Form onSubmit={ e => this.submitForm(e) }>
          <Input
            type="text"
            value={ name }
            name="name"
            htmlId="name"
            label="Enter full name: "
            errorMessage={ nameError }
            onInput={ e => this.onInput(e) }/>
          <Input
            type="text"
            value={ telephone }
            name="telephone"
            htmlId="telephone"
            label="Enter telephone: "
            errorMessage={ telephoneError }
            onInput={ e => this.onInput(e) }/>
          <input
            type="submit"
            value="Submit"
            className="formbtn"
            // style={{ float: 'right', marginTop: '10' }} 
            />
        </Form>
        </div>
        { this.state.redirect ? (<Redirect push to="/order"/>) : null }
            </>
        )
    }
}

StoreCheckout.propTypes = {
  // Name of user, initially empty string
  name: propTypes.string.isRequired,
  // Telephone of user, initially empty string
  telephone: propTypes.string.isRequired,
  // Error for name, if name is not valid, this string will have an error message
  nameError: propTypes.string.isRequired,
   // Error for telephone, if telephone is not valid, this string will have an error message
   telephoneError: propTypes.string.isRequired
};

export default StoreCheckout;