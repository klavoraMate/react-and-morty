import { Link } from 'react-router-dom'
import { mainUrls } from '../../api/dataRoutes'

import "../../style/cards.css"


const Card = ({ img, name, url, style }) => {
  return (
    <Link to={url}>
      <div className='inner-card'>
        <h3>{name}</h3>
        <img src={img ? img : mainUrls.planetImg}
          alt={name}
          style={style} />
      </div>
    </Link>
  )
}

export default Card