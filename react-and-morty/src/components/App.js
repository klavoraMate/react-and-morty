import "./App.css";
import Home from "./Home";
import CharacterList from "./cards/CharacterList";
import LocationList from "./cards/LocationList";
import CharacterDescription from "./descriptions/CharacterDescription";
import LocationDescription from "./descriptions/LocationDescription";
import useFetch from "../api/useFetch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./cards/Card";

function App() {
  const planetTest =
    "https://private-anon-80febb1f68-starhub.apiary-mock.com/api/planets";
  const { data: characters } = useFetch(
    "https://rickandmortyapi.com/api/character/?page="
  );
  const { data: locations } = useFetch(
    "https://rickandmortyapi.com/api/location/?page="
  );
  const { data: example } = useFetch(
    "https://private-anon-80febb1f68-starhub.apiary-mock.com/api/planets"
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            characters && <CharacterList characters={characters.results}/>
          }
        />
        <Route
          path="/locations"
          element={
            locations && <LocationList locations={locations.results} />
          }
        />
        <Route
          path="/characters/:id"
          element={
             <CharacterDescription/>
          }
        />
        <Route
          path="/locations/:id"
          element={
             <LocationDescription/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
