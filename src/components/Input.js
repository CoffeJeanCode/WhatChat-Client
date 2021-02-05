import * as React from 'react'

function Input({ message, setMessage, sendMessage }) {
  const handleMessageValue = ({ target: { value } }) => setMessage(value)

  const handleSendMessage = (e) => {
    e.preventDefault()
    sendMessage(e)
  }

  return (
    <form className="form" onSubmit={handleSendMessage}>
      <input
        className="input"
        type="text"
        value={message}
        onChange={handleMessageValue}
        autoFocus
      />
      <button className="sendButton">
        <i className="fal fa-paper-plane"></i>
      </button>
    </form>
  )
}

export default React.memo(
  Input,
  (preProps, nextProps) => preProps === nextProps,
)
