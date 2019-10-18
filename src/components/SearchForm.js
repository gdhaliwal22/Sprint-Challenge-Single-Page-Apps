import React, { useState, useEffect, setState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';

export default function SearchForm() {
const [characters, setCharacters] = useState([]);
const [completeList, setCompleteList] = useState([]);
let changes = 0;


useEffect(() => {
  axios.get("https://rickandmortyapi.com/api/character/").then(res => {
     console.log(res.data.results);
     setCharacters(res.data.results);
     setCompleteList(res.data.results);
   }).catch(e => console.log(e));
 }, [changes]);


 const handleChange = event => {

  setCharacters(characters.filter( item =>
  item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
  item.status.toLowerCase().includes(event.target.value.toLowerCase()) ||
  item.species.toLowerCase().includes(event.target.value.toLowerCase())
  
  ))
  changes++;
  console.log(event.target.value);

  if (event.target.value === ""){
    console.log("resetting search");
    console.log(completeList);
    setCharacters(completeList);
  }
  console.log(characters);
  

};


  return (
    <section className="search-form">
    
     <form>
        <label>
        Search
          <div>
            <input type="text" name="search" placeholder="Search here"
              onChange={event => handleChange(event)}
            />
          </div>
        </label>
      </form>
      <div className="character-list">
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
      </div>
    </section>
  );
}
