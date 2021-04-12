import { useMemo, memo } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import { toMap } from '../utils/toMap'
import Message from './Message'

function Messages({ messagesIds, messages, name }) {
  const messagesList = useMemo(
    () =>
      messagesIds.map((messageId) => {
        const message = toMap(messages).get(messageId)
        return (
          <div key={messageId}>
            <Message message={message} name={name} />
          </div>
        )
      }),
    [messages],
  )

  return <ScrollToBottom className="messages">{messagesList}</ScrollToBottom>
}

export default memo(Messages)
