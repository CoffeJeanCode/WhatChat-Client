import * as React from 'react'
import Icon from './Icons/Icons'

const TextContainer = ({ users }) => (
  <section className="textContainer">
    {users && window.innerWidth > 480 && (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <Icon type="onlineIcon" />
              </div>
            ))}
          </h2>
        </div>
      </div>
    )}
  </section>
)

export default React.memo(TextContainer)
