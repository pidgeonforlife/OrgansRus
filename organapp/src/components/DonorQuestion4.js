import React, { Component } from 'react';
import './UserForm.css'


export class DonorQuestion4 extends Component {
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
                  <img src='./images/progressbar5.png' />
              </div>
              <div id='question4' className='topChooseContainer'>
                  <p id='pSizing'>Almost done! Let's some more details about your health.</p>
                  <div className='ratingContainer'>
                  <div className='Rating'>
                      <p>How active are you on a daily basis?</p>
                      <div className='ratingButtonContainer'>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>5</button>
                      </div>
                  </div>
                  <div className='Rating'>
                  <p>How often do you drink alcohol?</p>
                  <div className='ratingButtonContainer'>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>5</button>
                      </div>
                      
                  </div>
                  <div className='Rating'>
                  <p>How often do you smoke / vape?</p>
                  <div className='ratingButtonContainer'>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>5</button>
                      </div>
                      
                  </div>
                  <div className='Rating'>
                  <p>How often do you use recreational drugs?</p>
                  <div className='ratingButtonContainer'>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>5</button>
                      </div>
                      
                  </div>
                  </div>
              </div>
              <div className='Continue'>
                  <button onClick={this.continue}>Continue</button>
              </div>
          </div>
      );
    }
  }
  
  export default DonorQuestion4;