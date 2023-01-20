import React, { useState } from "react";

const Search = ({ searched }) => {
  const [inputed, setInputed] = useState("");

  const onSearch = (e) => {
    setInputed(e);
    searched(e);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="search__box"
          autoFocus
          onChange={(e) => onSearch(e.target.value)}
          value={inputed}
        />
      </form>
    </div>
  );
};

export default Search;
