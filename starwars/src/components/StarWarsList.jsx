import React from 'react';
import StarWarsCard from './StarWarsCard';
import styled from 'styled-components';

export default function StarWarsList( {characterArray }) {
    return (
        <List>
            {characterArray.map((character, index) => (
                <StarWarsCard key={index} character={character}/>
            ))}
        </List>
    )
}


const List = styled.div`
margin-top: 40px;
display: flex;
flex-wrap: wrap;
`