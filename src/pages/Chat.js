import * as React from 'react'
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router-dom'
import io from 'socket.io-client'

import InfoBar from '../components/InfoBar'
import Input from '../components/Input'
import Messages from '../components/Messages'
import TextContainer from '../components/TextContainer'

import notification from '../assets/notification.mp3'
import { useTitle } from '../hooks/useTitle'
import { encrypt } from '../utils/encrypt'

const ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://chattie-sockets.herokuapp.com/'

export default function Chat() {
  const [name, setName] = React.useState('')
  const [room, setRoom] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [users, setUsers] = React.useState([])
  const [messages, setMessages] = React.useState([])
  const [socket] = React.useState(() => io(ENDPOINT))
  const notificationRef = React.useRef(null)
  const history = useHistory()
  const { search } = useLocation()
  const queryParams = queryString.parse(search)

  useTitle(`${room.toLocaleLowerCase()} | WhatChat`)

  React.useEffect(() => {
    const { room, name } = queryParams

    setRoom(room)
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error)
        history.push('/')
      }
    })
    notificationRef.current.volume = 50 / 100

    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])

      const { user } = message
      const trimedName = name.trim().toLowerCase()

      if (user !== trimedName) {
        notificationRef.current.play()
      }
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users)
    })
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    const encryptedMessage = encrypt(message, room)

    if (message) {
      socket.emit('sendMessage', encryptedMessage)
      setMessage('')
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} socket={socket} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        <audio ref={notificationRef} src={notification}></audio>
      </div>
      <TextContainer users={users}></TextContainer>
    </div>
  )
}
