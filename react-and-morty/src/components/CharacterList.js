
const CharacterList = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <p key={character.name}>{character.name}</p>
      ))}
    </div>
  )
}

export default CharacterList