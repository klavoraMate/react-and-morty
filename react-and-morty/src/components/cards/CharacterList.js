import Card from "./Card"
import "../../style/cards.css"
import { useParams } from 'react-router-dom';

const CharacterList = ({ characters, IDChange }) => {
  const { id } = useParams();
  IDChange(id)
  return (
    <div className="character-list">
      {characters.map((character) => (
        <div className="card" key={character.id} >
          <Card id={character.id} img={character.image} name={character.name} identity="character" />
        </div>
      ))}
    </div>
  )
}

export default CharacterList