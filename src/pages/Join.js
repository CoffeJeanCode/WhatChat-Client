import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'

export default function Join() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const history = useHistory()

  const handleChangeName = useCallback((e) => {
    setName(e.target.value)
  }, [])

  const handleChangeRoom = useCallback((e) => {
    setRoom(e.target.value)
  }, [])

  useTitle('WhatChat')

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            history.push(`/chat?room=${room}&name=${name}`)
          }}
        >
          <h1 className="title">What Chat</h1>
          <h2 className="heading">Join</h2>
          <div>
            <input
              required
              type="text"
              placeholder="Name"
              className="joinInput"
              onChange={handleChangeName}
            />
          </div>
          <div>
            <input
              required
              type="text"
              placeholder="Room"
              className="joinInput mt-20"
              onChange={handleChangeRoom}
            />
          </div>
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
