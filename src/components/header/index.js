import React, { useState } from 'react'
import './header.css'

import Web from './web/index'
import Mobile from './mobile/index'
import logo from '../../assets/logo.png'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
    <div className="header">
      <div className="logo">
          Aziz Rbii ☄️
      </div>
      <div className="menu">
          <div className="web-menu">
              <Web />
          </div>
          <div className="mobile-menu">
              <div onClick={() => setIsOpen(!isOpen)}>
                <i className="fi-rr-apps menu-icon"></i>
              </div>
              {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
      </div>
    </div>
    </div>
  )
}

export default Header
