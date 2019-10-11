import React from 'react';

export default function StarWarsCard( {character} ) {
    console.log(character);
    return (
        <div>
            <h3>{character.name}</h3>
            <p>Birth Year: {character.birth_year}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
        </div>
    )
}