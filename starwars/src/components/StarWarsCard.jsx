import React from 'react';
import styled from 'styled-components';


export default function StarWarsCard( {character} ) {
    console.log(character);
    return (
        <CardContainer>
            <h3>{character.name}</h3>
            <p>Birth Year: {character.birth_year}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
        </CardContainer>
    )
}

const CardContainer = styled.div`
border: 3px solid gold;
border-radius: 25px;
padding: 30px;
margin: 25px;
`