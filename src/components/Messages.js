import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'

function Messages({ messages, name }) {
  const messagesList = React.useMemo(() => {
    return messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))
  }, [messages])

  return <ScrollToBottom className="messages">{messagesList}</ScrollToBottom>
}

export default React.memo(Messages)