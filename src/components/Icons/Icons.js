import closeIcon from '../../assets/img/closeIcon.png'
import onlineIcon from '../../assets/img/onlineIcon.png'

const IconType = ({ type }) => {
  switch (type) {
    case 'closeIcon':
      return <img src={closeIcon} alt="icon" />
    case 'onlineIcon':
      return <img src={onlineIcon} alt="icon" />
  }
}

export default function Icon({ type }) {
  return (
    <div className="icon">
      <IconType type={type} />
    </div>
  )
}
