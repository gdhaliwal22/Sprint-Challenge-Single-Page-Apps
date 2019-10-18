import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "../index.css";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      setCharacters(res.data.results);
      console.log(res.data.results);
    })
    .catch(e => console.log(e));
  }, []);

  return (
    <section className="character-list">
      {characters.map(item => 
          <CharacterCard
            id={item.id}
            name={item.name}
            species={item.species}
            image={item.image}
            gender={item.gender}
            status={item.status}
            />   
            )
        }
      </section>
    );
  }
