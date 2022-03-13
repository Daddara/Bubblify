import React from "react";
import { Redirect } from "react-router-dom";
import toastr from 'toastr';
import Form from '../Form';
import Input from '../Input';


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
        if (Object.keys(errors).length > 0) {
          this.setState({ ...this.state.errors, errors });
          return false;
        }
    
        return true;
      }
    
      submitForm(e) {
        console.log(this);
        e.preventDefault();
        if (!this.validateForm()) {
          toastr.error('Please enter the reqiured fields', 'Failed!');
        } else {
          
          console.log(this.state.fields);
          localStorage.setItem('storeUser', JSON.stringify(this.state.fields));
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
                <h1>Contact information</h1>
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
            className="btn"
            // style={{ float: 'right', marginTop: '10' }} 
            />
        </Form>
        { this.state.redirect ? (<Redirect push to="/order"/>) : null }
            </>
        )
    }
}

export default StoreCheckout;