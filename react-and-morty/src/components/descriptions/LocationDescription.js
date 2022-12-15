import React from 'react'
import useFetch from '../../api/useFetch';
import { mainUrls } from '../../api/dataRoutes';
import { useParams, Link } from 'react-router-dom';
import "../../style/description.css"
import Card from '../cards/Card';


const LocationDescription = () => {
  const { id } = useParams();
  const { data: location } = useFetch(mainUrls.location + id);
  if (location) {
    return (
      <div className='description'>
        <Link to='../../locations/1'>
          <button>Back</button>
        </Link>
        <div className='main'>
          <h2>{location.name}</h2>
          <img src={mainUrls.planetImg} alt="generic planet drawing" />
        </div>
        <div className='info'>
          <div>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
          </div>
          <div className="character-list">
            {location.residents.map((character) => {
              console.log(character);
              return (
                <div className="card" key={character.id} >
                  <Card url={"/character/" + character.id} img={character.image} name={character.name} style={{}} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

}

export default LocationDescription