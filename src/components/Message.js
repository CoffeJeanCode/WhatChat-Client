import { memo } from 'react'
import ReactEmoji from 'react-emoji'
import { Remarkable } from 'remarkable'

const md = new Remarkable()

const url = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/

function Message({ message: { user, text }, name }) {
  let isSendByCurrentUser = false

  const trimedName = name.trim().toLowerCase()
  const richText = md.render(text)
  const matchUrl = text.match(url)

  if (user === trimedName) {
    isSendByCurrentUser = true
  }

  return isSendByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimedName}</p>
      <div className="messageBox backgroundBlue">
        {matchUrl ? (
          <a
            className="messageText"
            rel="noreferrer nofollow"
            target="_blank"
            href={text}
          >
            {text}
          </a>
        ) : (
          <p
            className="messageText"
            dangerouslySetInnerHTML={{ __html: ReactEmoji.emojify(richText) }}
          ></p>
        )}
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        {matchUrl ? (
          <a
            className="messageText colorDark"
            rel="noreferrer nofollow"
            target="_blank"
            href={text}
          >
            {text}
          </a>
        ) : (
          <p
            className="messageText colorDark"
            dangerouslySetInnerHTML={{ __html: ReactEmoji.emojify(richText) }}
          ></p>
        )}
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  )
}

export default memo(Message, () => true)
