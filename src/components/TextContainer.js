import { memo } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import Icon from './Icons/Icons'

const TextContainer = ({ users }) => {
  const isMobile = useMediaQuery('(max-width: 480px)')

  return (
    <>
      {users && !isMobile && (
        <section className="textContainer">
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
        </section>
      )}
    </>
  )
}

export default memo(
  TextContainer,
  (prevProps, nextProps) => prevProps === nextProps,
)
