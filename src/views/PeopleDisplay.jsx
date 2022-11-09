import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PeopleDisplay = () => {

  //STATE
  const [people, setPeople] = useState(null)

  // GRABBING PATH VARIABLE
  const {people_id} = useParams()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${people_id}/`)
      .then(res => setPeople(res.data))
      .catch(error => console.log(error))
  }, [])



  return (

    <fieldset>
      <legend>PeopleDisplay.jsx</legend>
      {/* {TERNARY OPERATORS} */}
      {
        (people) ? <>
          <h2>Name: {people.name}</h2>
          <h2>Height: {people.height}cm</h2>
          <h2>Hair Color: {people.hair_color}</h2>
          <h2>Skin Color: {people.skin_color}</h2>

        </> : <h2>Loading...</h2>
      }
      {/* HOT WIRE */}
      {/* {
      people&&<>
      <h1>{people.name}</h1>
      <h2>{people.gender}</h2>
      </>} */}
    </fieldset>
  )
}

export default PeopleDisplay