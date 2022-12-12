import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return <div className="App">Take a look at the console! (F12)</div>;
}

export default App;
