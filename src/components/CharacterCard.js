import React from "react";
import styled from "styled-components";



export default function CharacterCard(props) {
  return (
    <Card>
      <h2>{props.name}</h2>
      <div className="img-container">
        <img src={props.image} />
      </div>
      <CardInfo>
        <p>Gender: {props.gender}</p>
        <p>Species: {props.species}</p>
        <p>Status: {props.status}</p>
      </CardInfo>
      </Card>
     );
  }
