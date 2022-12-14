import { Link } from 'react-router-dom'
import "../../style/cards.css"


const Card = ({ id, img, name, identity }) => {
  const setNavigateToURL = () => {
    if (identity === 'character') return `/characters/${id}`
    if (identity === 'location') return `/locations/${id}`
  };
  return (
    <Link to={setNavigateToURL()}>
      <div className='card'>
        <h3>{name}</h3>
        <img src={img} alt={name} />
      </div>
    </Link>
  )
}

export default Card