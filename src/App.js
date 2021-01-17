import React, { useEffect, useState } from "react";
import CharSearch from "./CharSearch";
import "./App.css";
const XIVAPI = require('xivapi-js');
const xiv = new XIVAPI();

function App() {
  const [charId, setCharId] = useState();
  const [Character, setCharacter] = useState();

  useEffect(() => {
    if (charId) {
      xiv.character.get(charId, { extended: true })
        .then(res => {
          console.log(res)
          setCharacter(res.Character)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [charId])

  return (
    Character ?
      <div>
        <h1>{Character.Name}</h1>
        <img src={Character.Portrait} alt={Character.Name} />
      </div>
      :
      <CharSearch
        xiv={xiv}
        setCharId={setCharId}
      />
  )
}

export default App;
