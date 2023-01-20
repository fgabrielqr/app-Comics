import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Logo from "../../assets/images/logo.svg";
import Comics from "../Comics/Comics";
import SearchInput from "../Search/Search";

const Header = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function onSearch() {
      if (search === "") {
        if (
          localStorage.getItem("fav") === "[]" ||
          !localStorage.getItem("fav")
        ) {
          await api
            .get("/comics")
            .then((response) => {
              setResults(response.data.data.results);
              console.log(response.data.data);
            })
            .catch((err) => console.log(err));
        } else {
          const favor = JSON.parse(localStorage.getItem("favItem"));
          setResults(favor);
        }
      } else {
        await api
          .get(`/comics?titleStartsWith=${search}`)
          .then((response) => {
            setResults(response.data.data.results);
          })
          .catch((err) => console.log(err));
      }
    }
    onSearch();
  }, [search]);

  console.log(results);

  return (
    <div className="container__home">
      <div className="navbar__header">
        <Link to="/">
          <div className="logo__">
            <img src={Logo} alt="logo Marvel" className="logo__header" />
            <p>Comics</p>
          </div>
        </Link>
        <SearchInput searched={(q) => setSearch(q)}></SearchInput>
      </div>
      <div className="title__body">
        <h1>Histórias em Quadrinhos (HQs)</h1>
      </div>
      <div className="container__characters">
        {results.map((data, index) => {
          return (
            <Comics
              key={index}
              updateData={setResults}
              id={data.id}
              title={data.title}
              description={data.description}
              thumb={data.thumbnail.path}
            // date={data.modified}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
