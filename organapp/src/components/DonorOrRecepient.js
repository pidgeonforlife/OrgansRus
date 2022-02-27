import React, { Component } from 'react';
import './UserForm.css'


export class DonorOrRecepient extends Component {
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    };
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };
  
    render() {
      const { values, handleChange } = this.props;
      return (
          <div className='chooseContainer'>
              <div className='exit'>
                  <button onClick={this.back}>
                      <img src='./images/exitarrow.png' />
                      Exit
                  </button>
              </div>
              <div className='progress'>
                  <img src='./images/progressbar.png' />
              </div>
              <div className='topChooseContainer'>
                <p>Do you want to become a donor or a recepient?</p>
                <div className='buttoncontainer'>
                <div className='donor'>
                  <button onClick={this.continue}>
                      Donor
                      <img src='./images/donor.png' />
                  </button>
                </div>
                <div className='recepient'>
                  <button>
                      Recipient
                      <img src='/images/recipient.png' />
                  </button>
                </div>
                </div>
              </div>
          </div>
      );
    }
  }
  
  export default DonorOrRecepient;