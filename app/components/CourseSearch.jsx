import React from 'react'
import { useState } from 'react'

const CourseSearch = ({ getSearchResults }) => {

    const [ query, setQuery ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`/api/courses/search?query=${query}`)
        const courses = await res.json()

        getSearchResults(courses)        
    }



  return (
    <form onSubmit={handleSubmit} className='search-form'>
        <input 
            type='text' 
            placeholder='Search here...' 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} />
            <button className="search-button" type='submit'>search</button>
    </form>
  )
}

export default CourseSearch