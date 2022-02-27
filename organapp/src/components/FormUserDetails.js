import React, { Component } from 'react';
import './UserForm.css'

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <div className='userFormBackground'>
        <div className='userFormTop'>
          <img />
          <h1>PeerOrgan</h1>
          <p>Contribute and help save your own or somebody's life!</p>
        </div>
        <div className='userFormContainer'>
            <div className='formInput'>
            email
            <label>
              <input
                type='text'
                placeholder='Enter Your Email' 
                defaultValue={values.email}
                onChange={handleChange('email')}
              />
            </label>
            </div>
            <div className='formInput'>
            password
            <label>
              <input
                type='text'
                placeholder='Enter Your Pasword' 
                defaultValue={values.password}
                onChange={handleChange('firstName')}
              />
            </label>
            </div>
            <div className='formInput'>
            confirm password
            <label>
              <input
                type='text'
                placeholder='Confirm your password' 
                defaultValue={values.lastName}
                onChange={handleChange('lastName')}
              />
            </label>
            </div>
        </div>
        <div className='userFormBottom'>
            <button onClick={this.continue}>
              Continue
            </button>
            <p>Already a member? Login</p>
        </div>
        </div>
    );
  }
}

export default FormUserDetails;