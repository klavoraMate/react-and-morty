import React from 'react'
import useFetch from '../../api/useFetch';
import { mainUrls } from '../../api/dataRoutes';
import { useParams } from 'react-router-dom';
import "../../style/description.css"
import Card from '../cards/Card';


const LocationDescription = () => {
  const { id } = useParams();
  const { data: location } = useFetch(mainUrls.location + id);
  for (let index = 0; index < 10; index++) {
    useFetch();

  }
  if (location) {
    return (
      <div className='description'>
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