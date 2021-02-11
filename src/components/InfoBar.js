import * as React from 'react'
import Icon from './Icons/Icons'
import Clipboard from 'clipboard'

import { useHistory } from 'react-router-dom'

function InfoBar({ room, socket }) {
  const history = useHistory()

  React.useEffect(() => {
    const clip = new Clipboard('.btn')

    return () => clip.destroy()
  }, [])

  const handleExit = () => {
    history.push('/')
    socket.disconnect()
  }

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
        <div onClick={handleExit}>
          <Icon type="closeIcon" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(InfoBar)
