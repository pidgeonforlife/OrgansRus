import React, { Component } from 'react';
import './UserForm.css'


export class DonorQuestion2 extends Component {
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
                  <img src='./images/progressbar3.png' />
              </div>
              <div className='topChooseContainer'>
                  <p id='pSizing'>When Are You Looking to Donate?</p>
                  <form>
                      <select>
                        <option value="" disabled selected>Select Organ</option>
                          <option value='Kidney'>Kidney</option>
                          <option value='Lungs'>Lungs</option>
                          <option value='Heart'>Heart</option>
                          <option value='Liver'>Liver</option>
                          <option value='Pancreas'>Pancreas</option>
                          <option value='Intestines'>Intestines</option>
                          <option value='Blood'>Blood</option>
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
  
  export default DonorQuestion2;