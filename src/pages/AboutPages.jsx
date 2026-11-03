import React from 'react'
import Card from '../component/shared/card'
import {Link } from 'react-router-dom'

export default function AboutPages() {
  return (
    <Card>
    <div className='about'>
        <h1>About This Project</h1>
        <p>This is the React App for leaving the user Feedback</p>
        <p>Version 1.0.0</p>
        <p>
            <Link to='/'>Back to Page</Link>
            </p>
      
    </div>
    </Card>
  )
}
