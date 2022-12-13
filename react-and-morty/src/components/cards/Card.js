import { Link } from 'react-router-dom'

const Card = ({id,img,name,identity}) => {
  const setNavigateToURL = ()=>{
      if(identity === 'character') return `/characters/${id}`
      if(identity === 'location') return `/locations/${id}`
  };
  return (
    <Link to={setNavigateToURL()}>
        <div style={{border:"2px solid red"}}>
          <img src={img} alt={name} />
          <h3>{name}</h3>
        </div>
    </Link>
  )
}

export default Card