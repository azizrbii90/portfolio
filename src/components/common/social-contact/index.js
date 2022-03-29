import React from 'react'
import './social-contact.css'

import {SocialData} from '../../data/social'

const SocialContact = () => {
    const data = SocialData

    const redirectHandle = (link) => {
        window.open(link)
    }
  return (
    <div className="social-contact">
      {data.map((item) => {
          return(
              <a key={item.platform} onClick={() => redirectHandle(item.link)}>
                <div className="social-icon-div">
                    <img src={item.icon} className="social-icon" />
                </div>
              </a>
          )
      })}
    </div>
  )
}

export default SocialContact
