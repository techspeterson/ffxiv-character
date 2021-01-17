import React, { useState } from "react";

function CharSearch({ xiv, setCharId }) {
  const [name, setName] = useState("");
  const [nameResults, setNameResults] = useState([]);
  const [nameSearchLoading, setNameSearchLoading] = useState(false);
  const [hasSearchedName, setHasSearchedName] = useState(false);

  const nameSearch = (e) => {
    e.preventDefault();
    setNameSearchLoading(true);
    xiv.character.search(name)
      .then(res => {
        console.log(res);
        setNameResults(res.Results)
        setNameSearchLoading(false)
        setHasSearchedName(true);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const selectCharacter = (id) => {
    setCharId(id);
  }

  const renderSearchResults = () => {
    if (nameSearchLoading) {
      return "Loading..."
    }
    else if (nameResults.length) {
      return nameResults.map(char => {
        return <div className="char-select" onClick={() => selectCharacter(char.ID)}>
          <img src={char.Avatar} />
          {char.Name}
        </div>
      })
    }
    else if (hasSearchedName) {
      return "No results";
    }
  }

  return (
    <div>
      <form onSubmit={nameSearch}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Search by name"
        />
        <button type="submit">Search</button>
      </form>
      <div className="char-search-results">
        {renderSearchResults()}
      </div>
    </div>

  )
}

export default CharSearch;