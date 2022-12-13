import "./App.css";
import Home from "./Home";
import CharacterList from "./CharacterList";
import useFetch from "../api/useFetch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const planetTest = 'https://private-anon-80febb1f68-starhub.apiary-mock.com/api/planets'
  const { data: characters } = useFetch("https://akabab.github.io/starwars-api/api//all.json")
  const { data: example } = useFetch("https://private-anon-80febb1f68-starhub.apiary-mock.com/api/planets")

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/characters" element={<CharacterList characters={characters} />} />
      </Routes>
    </Router>
  );
}

export default App;
