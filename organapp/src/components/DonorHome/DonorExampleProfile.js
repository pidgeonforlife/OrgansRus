import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './DonorHome.css'

export class DonorExampleProfile extends Component {
    render() {
      return (
          <div className='donorExampleContainer'>
              <div className='donorTopTitle'>
                <img src='./images/PeerOrganLogo.png' />
              </div>
              <div className='donorCarousel'>
              </div>
              <div className='titleInfo'>
                  <h3></h3>

              </div>
              <div className='contactButton'>

              </div>
              <div className='donorExampleDescription'>

              </div>
          </div>
      )
    }
  }
  
  export default DonorExampleProfile;