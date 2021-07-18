import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About us</h1>
      <p>This is a project that will give you everything you need to make a dynamic gatsby site</p>
      <Link to="/contact"> Contact us </Link>
    </Layout>
  )
}

export default AboutPage