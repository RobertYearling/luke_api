import React, { useState, useEffect } from 'react';
import axios from 'axios';

const People = props => {
    const [people, setPeople] = useState(null)
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.id}`)
            .then(response => {
                setPeople(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [props])
    return (
        <>
            {
            people ?
            <>
            <h1>{people.name}</h1>
            <h3>Height: {people.height} cm</h3>
            <h3>Mass: {people.mass}</h3>
            <h3>Hair Color: {people.hair_color}</h3>
            <h3>Skin Color: {people.skin_color}</h3>
            </> : ""
            }
        </>
    );
};
export default People;