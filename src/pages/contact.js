import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact us</h1>
      <p>899-242322 or email at <a href="mailto:luis.lag17@gmail.com">Luis Garcia</a></p>
      <p> Twitter <Link to="https://twitter.com/SurfPiplup" target="_blank"> SurfPiplup </Link> </p>
    </Layout>
  )
}

export default ContactPage