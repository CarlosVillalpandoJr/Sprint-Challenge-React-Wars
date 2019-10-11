import React from 'react';
import StarWarsCard from './StarWarsCard';

export default function StarWarsList( {characterArray }) {
    return (
        <div>
            {characterArray.map((character, index) => (
                <StarWarsCard key={index} character={character}/>
            ))}
        </div>
    )
}