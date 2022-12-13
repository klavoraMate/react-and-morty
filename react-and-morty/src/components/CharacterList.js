
const CharacterList = ({ characters }) => {
  console.log('Characters: ', characters);
  return (
    <div>
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  )
}

export default CharacterList