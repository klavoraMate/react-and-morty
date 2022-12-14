import Card from "./Card"
import "../../style/cards.css"

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <div key={character.id} >
          <Card id={character.id} img={character.image} name={character.name} identity="character" />
        </div>
      ))}
    </div>
  )
}

export default CharacterList