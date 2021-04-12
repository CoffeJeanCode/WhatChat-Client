import { memo } from 'react'

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
        multiple
        value={message}
        onChange={handleMessageValue}
        placeholder="Write a message..."
        autoFocus
      />
      <button className="sendButton">
        <i className="fal fa-paper-plane"></i>
      </button>
    </form>
  )
}

export default memo(Input, (preProps, nextProps) => preProps === nextProps)
