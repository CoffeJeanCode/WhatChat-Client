import queryString from 'query-string'
import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import notification from '../assets/notification.mp3'
import InfoBar from '../components/InfoBar'
import Input from '../components/Input'
import Messages from '../components/Messages'
import TextContainer from '../components/TextContainer'
import { useRouter } from '../hooks/useRouter'
import { useTitle } from '../hooks/useTitle'
import { encrypt } from '../utils/encrypt'

const ENDPOINT = process.env.SOCKET_URL

export default function Chat() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])
  const [socket] = useState(() => io(ENDPOINT))
  const notificationRef = useRef(null)
  const { search, push: pushHistory } = useRouter()
  const [messagesIds, setMessagesIds] = useState()

  const queryParams = queryString.parse(search)
  useTitle(`${room.toLowerCase()} | WhatChat`)

  useEffect(() => {
    const { room, name } = queryParams

    setRoom(room)
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error)
        pushHistory('/')
      }
    })
    notificationRef.current.volume = 50 / 100

    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])
      setMessagesIds(messages.map((message) => message.id))

      const { user } = message
      const trimedName = name.trim().toLowerCase()

      if (user !== trimedName) {
        notificationRef.current.play()
      }
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users)
    })
    return () => notificationRef.current && notificationRef.current.destroy()
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()

    Date.now()

    if (message) {
      const encryptedMessage = encrypt(message, room.toLowerCase().trim())
      socket.emit('sendMessage', encryptedMessage)
      setMessage('')
    }
  }

  return (
    <>
      <audio ref={notificationRef} src={notification}></audio>
      <div className="outerContainer">
        <div className="container">
          <InfoBar room={room} socket={socket} />
          <Messages messagesIds={messagesIds} messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
        <TextContainer users={users}></TextContainer>
      </div>
    </>
  )
}
