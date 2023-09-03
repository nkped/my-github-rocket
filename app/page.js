'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import LoadingPage from './loading'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'

const Homepage = () => {
  const [ courses, setCourses ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    } 
    fetchCourses()
  }, [])
  
  if(loading) {return <LoadingPage />}


  return (
    <>
    <h1>Welcome to my courses, or whatever...</h1>
    <CourseSearch getSearchResults={(results) => setCourses(results)} />
    <Courses courses={courses}/>
    </>
  )
}

export default Homepage