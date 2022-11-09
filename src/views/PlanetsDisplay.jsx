import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PlanetsDisplay = () => {

    //STATE
    const [planets, setPlanets] = useState(null)
    // GRABBING PATH VARIABLE
    const { planets_id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planets_id}`)
            .then(res => setPlanets(res.data))
            .catch(error => console.log(error))
    }, [])



    return (

        <fieldset>
            <legend>PlanetsDisplay.jsx</legend>

            <h1>{planets.name}</h1>
        </fieldset>
    )
}

export default PlanetsDisplay