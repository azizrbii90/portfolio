import React from 'react'
import "./contact.css"

import Separator from "../../common/separator/index"
import SocialContact from "../../common/social-contact/index"

const Contact = () => {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download>
            <i className="fi-rr-cloud-download download-icon" /> 
            download resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
