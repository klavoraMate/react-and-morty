import "./App.css";
import Home from "./Home";
import CharacterList from "./cards/CharacterList";
import LocationList from "./cards/LocationList";
import CharacterDescription from "./descriptions/CharacterDescription";
import LocationDescription from "./descriptions/LocationDescription";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters/"
          element={
            <CharacterList />
          }
        />
        <Route
          path="/locations/"
          element={
            <LocationList />
          }
        />
        <Route
          path="/character/:id"
          element={
            <CharacterDescription />
          }
        />
        <Route
          path="/location/:id"
          element={
            <LocationDescription />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
