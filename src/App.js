import React, { useEffect, useState } from "react";
const XIVAPI = require('xivapi-js');
const xiv = new XIVAPI();

function App() {
  const [Character, setCharacter] = useState();

  useEffect(() => {
    xiv.character.get(31212570, { extended: true })
      .then(res => {
        console.log(res)
        setCharacter(res.Character)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    Character ?
      <div>
        <h1>{Character.Name}</h1>
      </div>
      : "loading..."
  )
}

export default App;
