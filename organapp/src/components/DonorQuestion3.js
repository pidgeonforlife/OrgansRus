import React, { Component } from 'react';
import './UserForm.css'


export class DonorQuestion3 extends Component {
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
                      Back
                  </button>
              </div>
              <div className='progress'>
                  <img src='./images/progressbar4.png' />
              </div>
              <div className='topChooseContainer'>
                  <p id='pSizing'>What Is Your Blood Type?</p>
                  <form>
                      <select>
                        <option value="" disabled selected>Select Blood Type</option>
                          <option value='Kidney'>A+</option>
                          <option value='Lungs'>A-</option>
                          <option value='Heart'>B+</option>
                          <option value='Liver'>B-</option>
                          <option value='Pancreas'>AB+</option>
                          <option value='Intestines'>AB-</option>
                          <option value='Blood'>O+</option>
                          <option value='Blood'>O-</option>
                      </select>
                  </form>
              </div>
              <div className='Continue'>
                  <button onClick={this.continue}>Continue</button>
              </div>
          </div>
      );
    }
  }
  
  export default DonorQuestion3;