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
      <div className="work-logo" > 
        <img src={item.companyLogo} style={{width: '100%', height: '100%'}} /> 
      </div>
    </div>
  )
}

export default WorkCard
