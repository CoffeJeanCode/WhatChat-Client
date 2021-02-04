import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Icon from './Icons/Icons'
import Clipboard from 'clipboard'

export default function InfoBar({ room }) {
  const history = useHistory()

  useEffect(() => {
    new Clipboard('.btn')
  }, [])

  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <Icon type="onlineIcon" />
        <h3 id="roomData" className="roomName pr-10">
          {room}
        </h3>
        <button className="btn" data-clipboard-target="#roomData">
          <i className="fas fa-copy"></i>
        </button>
      </div>
      <div className="rightInnerContainer">
        <div onClick={() => history.push('/')}>
          <Icon type="closeIcon" />
        </div>
      </div>
    </div>
  )
}
