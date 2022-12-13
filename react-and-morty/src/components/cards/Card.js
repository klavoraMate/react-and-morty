import { Link } from 'react-router-dom'

const Card = ({img,name,identity}) => {
  return (
    <Link to='/characters/3'>
        <div style={{border:"2px solid red"}}>
          <img src={img} alt={name} />
          <h3>{name}</h3>
        </div>
    </Link>
  )
}

export default Card