import "./App.css";
import Home from "./Home";
import CharacterList from "./cards/CharacterList";
import LocationList from "./cards/LocationList";
import CharacterDescription from "./descriptions/CharacterDescription";
import LocationDescription from "./descriptions/LocationDescription";
import useFetch from "../api/useFetch";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const BASE_CHARACTERS_URL = "https://rickandmortyapi.com/api/character/?page=";
const BASE_LOCATIONS_URL = "https://rickandmortyapi.com/api/location/?page="
const BASE_CHARACTER_URL = "https://rickandmortyapi.com/api/character/"
const BASE_LOCATION_URL = "https://rickandmortyapi.com/api/location/"

function App() {
  const [charactersURL,setCharactersURL] = useState(BASE_CHARACTERS_URL);
  const [characterURL,setCharacterURL] = useState(BASE_CHARACTER_URL);
  const [locationsURL,setLocationsURL] = useState(BASE_LOCATIONS_URL);
  const [locationURL,setLocationURL] = useState(BASE_LOCATION_URL);
  const handleCharactersIDChange = (pageID)=>{
    setCharactersURL(BASE_CHARACTERS_URL+pageID)
  }
  const handleCharacterIDChange = (pageID)=>{
    setCharacterURL(BASE_CHARACTER_URL+pageID)
  }
  const handleLocationsIDChange = (pageID)=>{
    setLocationsURL(BASE_LOCATIONS_URL+pageID)
  }
  const handleLocationIDChange = (pageID)=>{
    setLocationURL(BASE_LOCATION_URL+pageID)
  }
  const { data: characters } = useFetch(charactersURL);
  const { data: character } = useFetch(characterURL);
  const { data: locations } = useFetch(locationsURL);
  const { data: location } = useFetch(locationURL);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters/:id"
          element={
            characters && <CharacterList characters={characters.results} IDChange={handleCharactersIDChange}/>
          }
        />
        <Route
          path="/locations/:id"
          element={
            locations && <LocationList locations={locations.results} IDChange={handleLocationsIDChange}/>
          }
        />
        <Route
          path="/character/:id"
          element={
            character &&<CharacterDescription character={character} IDChange={handleCharacterIDChange}/>
          }
        />
        <Route
          path="/location/:id"
          element={
            location &&  <LocationDescription  location={location} IDChange={handleLocationIDChange}/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
