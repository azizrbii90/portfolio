import React from 'react'
import './work-card.css'

const WorkCard = ({ item }) => {
  return (
    <div className="work-card">
      <div className="work-info">
          <label className="company-name">{item.company}</label>
          <div className="work-dates">
              <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
          </div>
          <div className="work-desc">
              {item.description}
          </div>
      </div>
      <img src={item.companyLogo} className="work-logo" /> 

    </div>
  )
}

export default WorkCard
