import Card from "./Card"

const CharacterList = ({ characters}) => {
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