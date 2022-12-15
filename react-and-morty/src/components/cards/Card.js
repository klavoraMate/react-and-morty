import { Link } from 'react-router-dom'
import "../../style/cards.css"


const Card = ({ img, name, url, style }) => {
  return (
    <Link to={url}>
      <div className='inner-card'>
        <h3>{name}</h3>
        <img src={img}
          alt={name}
          style={style} />
      </div>
    </Link>
  )
}

export default Card