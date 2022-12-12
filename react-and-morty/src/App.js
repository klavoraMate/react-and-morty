import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://akabab.github.io/starwars-api/api//all.json")
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);

  return (
    <div>
      {characters.map((character) => (
        <p>{character.name}</p>
      ))}
    </div>
  );
}

export default App;
