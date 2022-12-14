import Card from "./Card"
import { useParams } from 'react-router-dom';

const CharacterList = ({ characters,IDChange}) => {
  const {id} = useParams();
  IDChange(id)
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id} >
          <Card id={character.id} img={character.image} name={character.name} identity="character"/>
        </div>
      ))}
    </div>
  )
}

export default CharacterList