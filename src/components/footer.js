import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as footerStyles from './footer.module.scss'


const Footer = () => {

  const data = useStaticQuery(graphql`
  query FooterQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`)

  return (
    <footer className={footerStyles.footer}>
      <p> Created by {data.site.siteMetadata.author}, © 2021 </p>
    </footer>
  )
}

export default Footer