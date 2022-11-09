import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    //STATE
    const [id, setId] = useState(null)
    const [category, setCategory] = useState("")

    //useNavigate
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }


    return (
        <fieldset>
            <legend>Search</legend>
            <form onSubmit={submitHandler}>
                <p>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    <input type="number" onChange={(e) => setId(e.target.value)} />
                    <button type='submit'>Search</button>
                </p>


            </form>
        </fieldset>
    )
}

export default Search