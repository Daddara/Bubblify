import React from "react";
import { NavLink } from "react-router-dom";
import toastr from 'toastr';
import Form from '../Form';
import Input from '../Input';


class StoreCheckout extends React.Component{
    state = {
        redirect: false,
        fields: {
          id : 0,
          name: '',
          description: '',
          url: '',
        },
        errors: {
          nameError: '',
          descriptionError: '',
          urlError: '',
        },
      }
    
      onInput(e) {
        this.setState({ fields: {
          ...this.state.fields,
          [ e.target.name ]: e.target.value,
        } });
      }
    
      validateForm() {
        const { name, description, url } = this.state.fields;
        const errors = {};
    
        if (name === '') { errors.nameError = 'Boss name is required.'; }
        if (description === '') { errors.descriptionError = 'Description is required.'; }
        if (url === '') { errors.urlError = 'Image url is required.'; }
        if (Object.keys(errors).length > 0) {
          this.setState({ ...this.state.errors, errors });
          return false;
        }
    
        return true;
      }
    
      submitForm(e) {
        e.preventDefault();
        if (!this.validateForm()) {
          toastr.error('The form was not successfully submitted!', 'Failed!');
        } else {
          let arr = this.props.bosses.data;
          const ids = arr.map(object => {
            return object.id;
          });
          const max = Math.max(...ids);
          const data = this.state.fields;
          const newId = max + 1;
          data.id = newId;
          data['img'] = data['url'];
          delete data['url'];
          this.props.createBoss(data);
          // Send data to api and redux store
          toastr.success('The form was successfully submitted!', 'Success!');
          this.setState({ redirect: true });
          // Redirect
        }
      }

    render(){
        
        const { name, description, url} = this.state.fields;
        const { nameError, descriptionError, urlError } = this.state.errors;

        return(
            // Render a form
            <>
                <h1>Create a new boss</h1>
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
            value={ description }
            name="description"
            htmlId="description"
            label="Enter description: "
            errorMessage={ descriptionError }
            onInput={ e => this.onInput(e) }/>
          <Input
            type="text"
            value={ url }
            name="url"
            htmlId="url"
            label="Enter photo url: "
            errorMessage={ urlError }
            onInput={ e => this.onInput(e) }/>
          <input
            type="submit"
            value="Create Boss"
            className="btn"
            // style={{ float: 'right', marginTop: '10' }} 
            />
        </Form>
            </>
        )
    }
}

export default StoreCheckout;