import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>About Me</h1>
    <p>My name is Charlie, I'm a student at 42 Silicon Valley and an iOS developer!</p>
    <p>My friends call me the database god but have only won one hackathon with databases.</p>
    <img src={require('../images/charlie-pic.jpg')}/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
