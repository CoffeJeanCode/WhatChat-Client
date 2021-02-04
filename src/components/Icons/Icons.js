import React from 'react'
import closeIcon from '../../assets/closeIcon.png'
import onlineIcon from '../../assets/onlineIcon.png'

const IconType = ({ type }) => {
  switch (type) {
    case 'closeIcon':
      return <img src={closeIcon} alt="icon" />
    case 'onlineIcon':
      return <img src={onlineIcon} alt="icon" />
  }
}

export default function Icon({ type }) {
  return (
    <div className="icon">
      <IconType type={type} />
    </div>
  )
}
