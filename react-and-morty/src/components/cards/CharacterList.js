
const CharacterList = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default CharacterList