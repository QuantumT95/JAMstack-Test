import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Howdy World??!</h1>
    <p>My name is Charlie Tran</p>
    <p>It's been a while since I've done any web development</p>
    <p>Please let me join this hackathon!</p>
    <Link to="/page-2/">About Me!</Link>
  </Layout>
)

export default IndexPage
